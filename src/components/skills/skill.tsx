"use client";

import { useMemo, useRef } from "react";
import { useIntersectionObserver } from "@/libs/text-animations/hooks/use-intersection-observer";
import clsx from "clsx";
import styles from "./skills.module.css";

export function Skill({
  number,
  title,
  description,
  revealDelay,
}: {
  number: string;
  title: string;
  description: string;
  revealDelay: number;
}) {
  const ref = useRef(null);
  const memoizedOptions = useMemo(() => ({ once: true, threshold: 0.75 }), []);
  const isInView = useIntersectionObserver(ref, memoizedOptions);

  return (
    <div
      ref={ref}
      className={clsx(styles["skill"], { [styles["animate"]]: isInView })}
      style={{ "--var-delay": `${revealDelay}s` } as React.CSSProperties}
    >
      <span className={styles["skill__number"]}>{number}</span>
      <h4 className={styles["skill__title"]}>{title}</h4>
      <p className={styles["skill__description"]}>{description}</p>
    </div>
  );
}
