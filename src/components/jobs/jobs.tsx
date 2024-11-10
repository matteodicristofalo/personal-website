import { Section } from "@/components/section/section";
import { Job } from "./job";

export function Jobs() {
  return (
    <Section number="01" title="Jobs">
      {jobs.map((job, i) => (
        <Job key={i} {...job} />
      ))}
    </Section>
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima saepe dolores iusto earum excepturi nulla magni distinctio iste autem a eum commodi, dicta nostrum esse sequi eius delectus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima saepe dolores iusto earum excepturi nulla magni distinctio iste autem a eum commodi, dicta nostrum esse sequi eius delectus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    company: {
      name: "Pharmap",
      logo: "/pharmap.jpg",
    },
    role: "Fullstack Developer",
    period: "2021 - 2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima saepe dolores iusto earum excepturi nulla magni distinctio iste autem a eum commodi, dicta nostrum esse sequi eius delectus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima saepe dolores iusto earum excepturi nulla magni distinctio iste autem a eum commodi, dicta nostrum esse sequi eius delectus quo. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];
