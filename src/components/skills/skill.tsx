"use client";

import { SplitTextReveal } from "@/libs/text-animations/components/split-text-reveal/split-text-reveal";
import styles from "./skills.module.scss";
import { useMemo } from "react";

export function Skill({
  number,
  title,
  description,
  revealDelay,
}: {
  number: string;
  title: string;
  description: string;
  revealDelay: number;
}) {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.0075 }), []);

  return (
    <div
      className={styles["skill"]}
      style={{ "--var-delay": `${revealDelay}s` } as React.CSSProperties}
    >
      <span className={styles["skill__number"]}>{number}</span>
      <h4 className={styles["skill__title"]}>
        <SplitTextReveal text={title} />
      </h4>
      <p className={styles["skill__description"]}>
        <SplitTextReveal
          text={description}
          splitType="word"
          revealOptions={memoizedRevealOptions}
        />
      </p>
    </div>
  );
}
