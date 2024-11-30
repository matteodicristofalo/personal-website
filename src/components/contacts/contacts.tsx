"use client";

import { Section } from "@/components/section/section";
import { SplitTextRotate } from "@matteodicristofalo/text-animations";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import styles from "./contacts.module.scss";

export function Contacts() {
  return (
    <div className={styles["contacts__section__container"]}>
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
              <a
                target="_blank"
                href="https://www.instagram.com/matteodicristofalo/"
                className={styles["contacts__social__link"]}
              >
                <SplitTextRotate text="Instagram" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/matteo-di-cristofalo-517125259/"
                className={styles["contacts__social__link"]}
              >
                <SplitTextRotate text="Linkedin" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://github.com/matteodicristofalo"
                className={styles["contacts__social__link"]}
              >
                <SplitTextRotate text="Github" />
              </a>
            </li>
          </ul>
        </div>
      </Section>
    </div>
  );
}
