"use client";

import { useRef } from "react";
import { Section } from "@/components/section/section";
import { Skill } from "./skill";
import { ShapeProps } from "../shape/shape";
import dynamic from "next/dynamic";
import clsx from "clsx";
import styles from "./skills.module.scss";

const Shape = dynamic<ShapeProps>(() => import("../shape/shape"), {
  ssr: false,
});

export function Skills() {
  const ref = useRef(null);

  return (
    <div className={styles["skills__section__container"]}>
      <Section ref={ref} id="skills" title="Skills">
        <div className={clsx("grid", styles["skills"])}>
          {skills.map((skill, i) => (
            <div
              className={clsx("col-12 col-lg-3", styles["skill__container"])}
              key={i}
            >
              <Skill title={skill.title} description={skill.description} />
            </div>
          ))}
        </div>
      </Section>

      <Shape containerRef={ref} />
    </div>
  );
}

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
