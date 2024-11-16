"use client";

import { useRef } from "react";
import { useIntersectionObserver } from "@/libs/text-animations/hooks/use-intersection-observer";
import { Section } from "@/components/section/section";
import { Job } from "./job";
import clsx from "clsx";
import styles from "./job.module.scss";

export function Jobs() {
  const ref = useRef(null);
  const isInView = useIntersectionObserver(ref, { threshold: 0.25 });

  return (
    <div
      ref={ref}
      className={clsx({ [styles["job__section__container"]]: isInView })}
    >
      <Section id="jobs" number="01" title="Jobs">
        {jobs.map((job, i) => (
          <Job key={i} {...job} />
        ))}
      </Section>
    </div>
  );
}

const jobs = [
  {
    company: {
      name: "Gucci",
      logo: "/gucci.jpg",
    },
    role: "Frontend Developer",
    period: "2022 - now",
    description:
      "I've contributed to key projects such as developing the e-commerce with a primary focus on the Product Detail Page, to the development of the orchestration layer for a microfrontend architecture and to a Design System library to ensure consistency across all Gucci Digital products. Working and collaborating in a dynamic, cross-functional environment, managing codebases shared among dozens of developers ensuring high-quality development standards.",
  },
  {
    company: {
      name: "Pharmap",
      logo: "/pharmap.jpg",
    },
    role: "Fullstack Developer",
    period: "2021 - 2022",
    description:
      "I've developed and maintained a comprehensive application that streamlined appointment bookings for healthcare companies. I contributed to both front-end and back-end development, demonstrating my ability to work across the full stack and",
  },
];
