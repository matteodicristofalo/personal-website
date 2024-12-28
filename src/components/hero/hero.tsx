"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import me from "@public/me.jpg";
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
      <h2 className={styles["hero__name"]} aria-label="Matteo Di Cristofalo">
        <span className={styles["hero__name__span"]} aria-hidden="true">
          Matteo Di Cristofalo
        </span>
        <span className={styles["hero__name__span"]} aria-hidden="true">
          Matteo Di Cristofalo
        </span>
      </h2>

      <motion.div className={styles["hero__image"]} style={{ y }}>
        <Image
          src={me}
          alt="Matteo Di Cristofalo"
          fill
          priority
          placeholder="blur"
        />
      </motion.div>
    </section>
  );
}
