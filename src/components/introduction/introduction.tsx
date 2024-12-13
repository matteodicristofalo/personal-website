"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import styles from "./introduction.module.scss";

export function Introduction() {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.001 }), []);

  return (
    <section className={styles["introduction"]}>
      <p className={styles["introduction__paragraph"]}>
        <SplitTextReveal
          splitType="word"
          text="Ciao 👋🏼 - I'm a Software Engineer based in Florence, I build creative websites that engage and inspire."
          revealOptions={memoizedRevealOptions}
        />
      </p>
    </section>
  );
}
