/* eslint-disable @next/next/no-img-element */

"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/section/section";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import { Tabs } from "./tabs/tabs";
import { AutoPlayVideo } from "../video/video";
import styles from "./about.module.scss";

export function About() {
  const [activeTab, setActiveTab] = useState(0);

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
        <div className="col-12 col-lg-10 start-lg-3">
          <h3 className={styles["interests__title"]}>Personal interests</h3>

          <Tabs
            tabs={interests}
            activeTabIndex={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </Section>
  );
}

const interests = [
  {
    name: "Fashion",
    content: <FashionContent />,
  },
  {
    name: "Music",
    content: <MusicContent />,
  },
  {
    name: "Travels",
    content: <TravelsContent />,
  },
];

function FashionContent() {
  return (
    <div className={styles["interest"]}>
      <div className={styles["interest__media"]}>
        <img
          src="wales-bonner.jpeg"
          alt="Adidas Wales Bonner"
          className={styles["image"]}
        />
      </div>

      <div className={styles["interest__copy"]}>
        <p>
          I&#39;m a fashion lover with a particular passion for sneakers, always
          exploring the latest trends and timeless styles in both footwear and
          clothing.
        </p>
      </div>
    </div>
  );
}

function MusicContent() {
  return (
    <div className={styles["interest"]}>
      <div className={styles["interest__media"]}>
        <AutoPlayVideo src="chris-stussy.mp4" />
      </div>

      <div className={styles["interest__copy"]}>
        <p>
          I&#39;m really into music, especially when it comes to House, Tech
          House, and Techno. I&#39;m often out during weekends, I love going to
          clubs and partying with my friends.
        </p>
      </div>
    </div>
  );
}

function TravelsContent() {
  return (
    <div className={styles["interest"]}>
      <div className={styles["interest__media"]}>
        <img src="paris.jpeg" alt="Paris" className={styles["image"]} />
      </div>

      <div className={styles["interest__copy"]}>
        I love traveling, especially in Northern Europe. I recently visited
        Amsterdam and Paris. I fell in love with Paris, the architecture and the
        city&#39;s vibe really captivated me.
      </div>
    </div>
  );
}
