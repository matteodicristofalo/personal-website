"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./hero.module.scss";

export function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.5, 0.9], [0, 0, -200]);

  return (
    <section ref={ref} className={styles["hero"]}>
      <h2 className={styles["hero__name"]}>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
        <span className={styles["hero__name__span"]}>Matteo Di Cristofalo</span>
      </h2>

      <motion.img
        src="/me.jpg"
        alt="Matteo Di Cristofalo"
        className={styles["hero__image"]}
        style={{ y }}
      />
    </section>
  );
}
