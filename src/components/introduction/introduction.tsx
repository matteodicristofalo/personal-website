"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@/libs/text-animations/components/split-text-reveal/split-text-reveal";
import styles from "./introduction.module.scss";

export function Introduction() {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.001 }), []);

  return (
    <section className={styles["introduction"]}>
      <p className={styles["introduction__paragraph"]}>
        <SplitTextReveal
          splitType="word"
          text="Ciao 👋🏼 - I'm a Frontend Developer based in Florence, passionate in building creative websites that engage and inspire."
          revealOptions={memoizedRevealOptions}
        />
      </p>
    </section>
  );
}
