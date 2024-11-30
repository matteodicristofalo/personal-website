"use client";

import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles["hero"]}>
      <h2 className={styles["hero__name"]}>
        <SplitTextReveal text="Matteo Di Cristofalo" />
      </h2>

      <div className={styles["hero__image"]}></div>
    </section>
  );
}
