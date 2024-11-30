"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Section } from "@/components/section/section";
import { Skill } from "./skill";
import clsx from "clsx";
import styles from "./skills.module.scss";

export function Skills() {
  const [hasBeenMounted, setHasBeenMounted] = useState(false);

  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const height = useTransform(scrollYProgress, [0, 0.8], [50, 0]);

  useEffect(() => {
    setHasBeenMounted(true);
  }, []);

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
                revealDelay={0.025 * i}
              />
            </div>
          ))}
        </div>
      </Section>

      <motion.div
        style={{ height: hasBeenMounted ? height : 0 }}
        className={styles["shape__container"]}
      >
        <div className={styles["shape"]}></div>
      </motion.div>
    </>
  );
}

const skillNumber = (index: number) => (index < 10 ? `0${index}` : `${index}`);

const skills = [
  {
    title: "HTML",
    description:
      "Experienced in writing clean, semantic HTML for accessible and SEO-friendly web pages.",
  },
  {
    title: "SCSS",
    description:
      "Experienced in using variables, mixins, and nesting for modular, reusable code.",
  },
  {
    title: "Typescript",
    description:
      "Experienced in using types, improving code clarity and maintainability for scalable applications.",
  },
  {
    title: "React",
    description:
      "Experienced in best practices with a strong understanding of lifecycles and hooks for efficient state management.",
  },
  {
    title: "Next.js",
    description:
      "Experienced in server-side rendering and static site generation for fast, scalable web apps.",
  },
  {
    title: "React testing library",
    description:
      "Experienced in writing unit tests with React Testing Library for reliable, maintainable code.",
  },
  {
    title: "Playwright",
    description:
      "Experienced in end-to-end testing with Playwright for cross-browser automation, reliable tests.",
  },
  {
    title: "Rollup",
    description:
      "Experienced in using Rollup for bundling JavaScript and building optimized npm packages",
  },
  {
    title: "Docker",
    description:
      "Experienced in using Docker to containerize applications, ensuring consistent development, testing, and deployments.",
  },
  {
    title: "Git",
    description:
      "Experienced in using Git from the CLI to manage version control in large codebases shared among dozens of developers.",
  },
];
