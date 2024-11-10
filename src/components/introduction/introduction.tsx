"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@/lib/components/split-text-reveal/split-text-reveal";
import styles from "./introduction.module.css";

export function Introduction() {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.001 }), []);

  return (
    <section className={styles["introduction"]}>
      <p className={styles["introduction__paragraph"]}>
        <SplitTextReveal
          text="Ciao 👋🏼 - I'm a Frontend Developer based in Florence. Lorem ipsum dolor sit amet astate mit reles"
          revealOptions={memoizedRevealOptions}
        />
      </p>
    </section>
  );
}
