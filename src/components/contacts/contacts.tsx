import { Section } from "@/components/section/section";
import styles from "./contacts.module.scss";
import { SplitTextRotate } from "@/libs/text-animations/components/split-text-rotate/split-text-rotate";
import { SplitTextReveal } from "@/libs/text-animations/components/split-text-reveal/split-text-reveal";

export function Contacts() {
  return (
    <Section
      id="contacts"
      number="04"
      title="Want to work toghether?"
      subtitle="Send me a message"
      minHeight={false}
    >
      <div className={styles["contacts"]}>
        <a
          href="mailto:dicristofalomatteo@gmail.com"
          className={styles["contacts__email"]}
        >
          <SplitTextReveal text="dicristofalomatteo" splitType="sentence" />
          <SplitTextReveal text="@gmail.com" splitType="sentence" />
        </a>

        <ul className={styles["contacts__social"]}>
          <li>
            <a href="#" className={styles["contacts__social__link"]}>
              <SplitTextRotate text="Instagram" />
            </a>
          </li>
          <li>
            <a href="#" className={styles["contacts__social__link"]}>
              <SplitTextRotate text="Linkedin" />
            </a>
          </li>
          <li>
            <a href="#" className={styles["contacts__social__link"]}>
              <SplitTextRotate text="Github" />
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
}
