"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import styles from "./skills.module.scss";

export function Skill({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.0075 }), []);

  return (
    <div className={styles["skill"]}>
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
