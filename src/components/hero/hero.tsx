import { SplitTextReveal } from "@/lib/components/split-text-reveal/split-text-reveal";
import styles from "./hero.module.css";

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
