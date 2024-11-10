"use client";

import { round } from "@/lib/utils/numbers";
import { characters } from "@/lib/utils/text";
import { SplitTextRotateProps } from "./split-text-rotate.types";
import styles from "./split-text-rotate.module.css";

const DEFAULT_DURATION = 0.25;
const DEFAULT_STAGGER = 0.025;

export function SplitTextRotate({ text, rotateOptions }: SplitTextRotateProps) {
  const transitionDuration = rotateOptions?.duration || DEFAULT_DURATION;
  const transitionStagger = rotateOptions?.stagger || DEFAULT_STAGGER;

  return (
    <span
      className={styles["text"]}
      style={
        {
          "--var-duration": `${transitionDuration}s`,
        } as React.CSSProperties
      }
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <span key={i} className={styles["container"]}>
          {characters(text).map((char, i) => (
            <span
              key={i}
              className={styles["char"]}
              style={
                {
                  "--var-delay": `${round(transitionStagger * i, 3)}s`,
                } as React.CSSProperties
              }
            >
              {char}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
