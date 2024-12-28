import { Section } from "@/components/section/section";
import { Job } from "./job";
import styles from "./job.module.scss";

export function Jobs() {
  return (
    <div className={styles["job__section__container"]}>
      <Section id="jobs" title="Jobs">
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
    role: "Software Engineer",
    period: "2022 - now",
    description:
      "Gucci is such an iconic brand. It's a big company that gave me the opportunity work in an international environment. I met a lot of very talented people. During my experience with Gucci I've contributed to key projects such as the development of the e-commerce, of the orchestration layer for a microfrontend architecture and of a Design System library to ensure visual consistency across all Gucci digital products.",
  },
  {
    company: {
      name: "Pharmap",
      logo: "/pharmap.jpg",
    },
    role: "Software Engineer",
    period: "2021 - 2022",
    description:
      "This was my very first job. During this experience I've done both front-end and back-end development, demonstrating my ability to work across the full stack. I've contributed to the development of an application of appointment bookings for companies in the healtcare industry.",
  },
];
