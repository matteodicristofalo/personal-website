"use client";

import { useMemo, useRef } from "react";
import { round } from "@/lib/utils/numbers";
import { characters, words } from "@/lib/utils/text";
import { useIntersectionObserver } from "@/lib/hooks/use-intersection-observer";
import {
  AnimatedSpanProps,
  SplitTextRevealProps,
} from "./split-test-reveal.types";
import clsx from "clsx";
import styles from "./split-text-reveal.module.css";

const DEFAULT_DURATION = 0.5;
const DEFAULT_STAGGER = 0.01;

export function SplitTextReveal({
  text,
  splitType = "char",
  revealOptions,
}: SplitTextRevealProps) {
  const ref = useRef(null);
  const memoizedOptions = useMemo(() => ({ once: true, threshold: 0.75 }), []);
  const isInView = useIntersectionObserver(ref, memoizedOptions);
  const transitionDuration = revealOptions?.duration || DEFAULT_DURATION;
  const transitionStagger = revealOptions?.stagger || DEFAULT_STAGGER;

  return (
    <span
      ref={ref}
      className={clsx(styles["text"], { [styles["animate"]]: isInView })}
      style={
        {
          "--var-duration": `${transitionDuration}s`,
        } as React.CSSProperties
      }
    >
      {words(text).map((word, i) => (
        <span key={i} className={styles["word"]}>
          {splitType === "word" ? (
            <AnimatedSpan text={word} delay={transitionStagger * i} />
          ) : (
            characters(word).map((character, i) => (
              <AnimatedSpan
                key={i}
                text={character}
                delay={round(transitionStagger * i, 3)}
              />
            ))
          )}
        </span>
      ))}
    </span>
  );
}

function AnimatedSpan({ text, delay }: AnimatedSpanProps) {
  return (
    <span
      style={
        {
          "--var-delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      {text}
    </span>
  );
}
