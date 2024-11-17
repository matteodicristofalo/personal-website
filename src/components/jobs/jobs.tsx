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
    company: "Gucci",
    role: "Frontend Developer",
    period: "2022 - now",
    description:
      "Gucci is such an iconic brand. It's a big company that gave me the opportunity work in an international environment. I met a lot of very talented people. During my experience with Gucci I've contributed to key projects such as the development of the e-commerce, of the orchestration layer for a microfrontend architecture and of a Design System library to ensure visual consistency across all Gucci digital products.",
  },
  {
    company: "Pharmap",
    role: "Fullstack Developer",
    period: "2021 - 2022",
    description:
      "This was very first my job. During this experience I've done both front-end and back-end development, demonstrating my ability to work across the full stack. I've contributed to the development of an application of appointment bookings for companies in the healtcare industry.",
  },
];
