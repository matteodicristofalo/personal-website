import { Section } from "@/components/section/section";
import { Skill } from "./skill";
import clsx from "clsx";
import styles from "./skills.module.css";

export function Skills() {
  return (
    <Section number="02" title="Skills">
      <div className={clsx("grid", styles["skills"])}>
        {skills.map((skill, i) => (
          <div className={clsx("col-3", styles["skill-container"])} key={i}>
            <Skill
              number={skillNumber(i + 1)}
              title={skill.title}
              description={skill.description}
              revealDelay={randomDelay()}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

const skillNumber = (index: number) => (index < 9 ? `0${index}` : `${index}`);

const randomDelay = () => parseFloat((Math.random() * 0.25).toFixed(2));

const skills = Array(8).fill({
  title: "Title",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
});
