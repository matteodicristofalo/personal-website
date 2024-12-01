"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./shape.module.scss";

export type ShapeProps = {
  containerRef: React.RefObject<HTMLElement>;
};

export default function Shape({ containerRef }: ShapeProps) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

  return (
    <motion.div style={{ height }} className={styles["shape__container"]}>
      <div className={styles["shape"]}></div>
    </motion.div>
  );
}
