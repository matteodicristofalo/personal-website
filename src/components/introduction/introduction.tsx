import styles from "./introduction.module.css";
import { SplitTextReveal } from "@/lib/components/split-text-reveal/split-text-reveal";

export function Introduction() {
  return (
    <section className={styles["introduction"]}>
      <p className={styles["introduction__paragraph"]}>
        <SplitTextReveal text="Ciao - I'm a Frontend Developer based in Florence. Lorem ipsum dolor sit amet astate mit reles" />
      </p>
    </section>
  );
}
