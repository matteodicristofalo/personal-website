/* eslint-disable @next/next/no-img-element */

import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles["hero"]}>
      <h2 className={styles["hero__name"]}>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
      </h2>

      <img
        src="/me.jpg"
        alt="Matteo Di Cristofalo"
        className={styles["hero__image"]}
      />
    </section>
  );
}
