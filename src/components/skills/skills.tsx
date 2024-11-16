"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/section/section";
import { Skill } from "./skill";
import clsx from "clsx";
import styles from "./skills.module.scss";

export function Skills() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

  return (
    <>
      <Section ref={ref} id="skills" number="02" title="Skills">
        <div className={clsx("grid", styles["skills"])}>
          {skills.map((skill, i) => (
            <div
              className={clsx("col-12 col-lg-3", styles["skill__container"])}
              key={i}
            >
              <Skill
                number={skillNumber(i + 1)}
                title={skill.title}
                description={skill.description}
                revealDelay={0.05 * i}
              />
            </div>
          ))}
        </div>
      </Section>

      <motion.div style={{ height }} className={styles["shape__container"]}>
        <div className={styles["shape"]}></div>
      </motion.div>
    </>
  );
}

const skillNumber = (index: number) => (index < 9 ? `0${index}` : `${index}`);

const skills = Array(8).fill({
  title: "Title",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
});
