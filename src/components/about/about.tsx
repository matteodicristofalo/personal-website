"use client";

import { Section } from "@/components/section/section";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import { useMemo } from "react";
import styles from "./about.module.scss";

export function About() {
  const memoizedAboutRevealOptions = useMemo(() => ({ stagger: 0.0025 }), []);

  return (
    <Section id="about" title="About">
      <div className="grid">
        <div className="col-12 col-lg-6 start-lg-3">
          <p className={styles["about__paragraph"]}>
            <SplitTextReveal
              text="I'm 26 years old, originally from Palermo. My passion for coding started at high school where I studied IT. After high school I got a bachelor degree in Computer Science and then I moved to Florence to further my professional career."
              splitType="word"
              revealOptions={memoizedAboutRevealOptions}
            />
          </p>
        </div>
      </div>

      <div className="grid">
        <div className="col-12 col-lg-6 start-lg-3">
          <h3 className={styles["interests__title"]}>My interests</h3>
        </div>
      </div>
    </Section>
  );
}
