"use client";

import { useMemo } from "react";
import { round } from "@/lib/utils/numbers";
import { characters, words } from "@/lib/utils/text";
import { SplitTextRotateProps, Word } from "./split-text-rotate.types";
import styles from "./split-text-rotate.module.css";

const DEFAULT_DURATION = 0.25;
const DEFAULT_STAGGER = 0.025;

export function SplitTextRotate({ text, rotateOptions }: SplitTextRotateProps) {
  const transitionDuration = rotateOptions?.duration || DEFAULT_DURATION;
  const transitionStagger = rotateOptions?.stagger || DEFAULT_STAGGER;

  const splittedWords: Word[] = useMemo(() => {
    let previosCharDelay = 0;

    return words(text).map((word) =>
      characters(word).map((char) => {
        previosCharDelay = round(previosCharDelay + transitionStagger, 3);
        return {
          char,
          delay: previosCharDelay,
        };
      })
    );
  }, [text, transitionStagger]);

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
          {splittedWords.map((word, i) => (
            <span key={i} className={styles["word"]}>
              {word.map(({ char, delay }, i) => (
                <span
                  key={i}
                  className={styles["char"]}
                  style={
                    {
                      "--var-delay": `${delay}s`,
                    } as React.CSSProperties
                  }
                >
                  {char}
                </span>
              ))}
            </span>
          ))}
        </span>
      ))}
    </span>
  );
}
