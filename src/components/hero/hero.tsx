import styles from "./hero.module.scss";

export function Hero() {
  return (
    <section className={styles["hero"]}>
      <h2 className={styles["hero__name"]}>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
      </h2>

      <div className={styles["hero__image"]}></div>
    </section>
  );
}
