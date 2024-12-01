/* eslint-disable @next/next/no-img-element */

"use client";

import { useMemo, useState } from "react";
import { Section } from "@/components/section/section";
import { Carousel } from "../carousel/carousel";
import { Video } from "../video/video";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import styles from "./about.module.scss";

export function About() {
  const memoizedAboutRevealOptions = useMemo(() => ({ stagger: 0.0025 }), []);
  const memoizedInterestRevealOptions = useMemo(() => ({ stagger: 0.005 }), []);

  const [activeVideo, setActiveVideo] = useState(0);
  const [muted, setMuted] = useState(true);

  const fashionSlides = outfitImages.map(({ src, alt }, index) => (
    <img key={index} src={src} alt={alt} className={styles["image"]} />
  ));

  const partySlides = partyVideos.map((src, index) => (
    <Video
      key={index}
      src={src}
      play={activeVideo === index}
      mute={muted || activeVideo !== index}
      onClick={() => setMuted(!muted)}
    />
  ));

  return (
    <Section id="about" number="03" title="About">
      <div className="grid">
        <div className="col-12 col-lg-6 start-lg-3">
          <p className={styles["about__paragraph"]}>
            <SplitTextReveal
              text="I'm a 26 yo originally from Palermo. My passion for coding started at high school where I studied IT. After high school I got a degree in Computer Science at the University of Palermo. Then I moved to Florence to further my career in the tech industry. I've always been passionate about design in all its forms, this love for design led me to frontend development, where I can combine creativity with functionality. For me, great design is about simplicity, usability, and creating seamless interactions. I’m constantly exploring new trends and techniques to craft clean, intuitive interfaces that not only look great but also enhance the user experience."
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

      <div className={styles["interests"]}>
        <div className={styles["interest"]}>
          <a
            href="https://open.spotify.com/playlist/37i9dQZF1FalrNvKGFFiID?si=36e00b3bb2a545fc"
            target="_blank"
          >
            <img
              src="/spotify-wrapped.jpg"
              alt="Spotify wrapped"
              className={styles["image"]}
            />
          </a>
          <div className={styles["interest__title"]}>
            <SplitTextReveal text="Music" />
          </div>
          <div className={styles["interest__description"]}>
            <SplitTextReveal
              text="Music is my constant companion, whether I'm working, relaxing, or on the move, it has the power to inspire and energize me in every moment. I enjoy all genres really, from jazz to hip-hop to house"
              splitType="word"
              revealOptions={memoizedInterestRevealOptions}
            />
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__carousel__container"]}>
            <Carousel slides={fashionSlides} />
          </div>
          <div className={styles["interest__title"]}>
            <SplitTextReveal text="Fashion" />
          </div>
          <div className={styles["interest__description"]}>
            <SplitTextReveal
              text="I need to confess... I'm a fashion victim. I love experimenting with different styles, For me, fashion is a form of self-expression."
              splitType="word"
              revealOptions={memoizedInterestRevealOptions}
            />
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__carousel__container"]}>
            <Carousel
              onSlideChange={(index) => setActiveVideo(index)}
              slides={partySlides}
            />
          </div>
          <div className={styles["interest__title"]}>
            <SplitTextReveal text="Party" />
          </div>
          <div className={styles["interest__description"]}>
            <SplitTextReveal
              text="I'm passionate about parties, especially when it comes to House, Tech House, and Techno music. I'm often out during weekends, and I recently had the chance to experience ADE."
              splitType="word"
              revealOptions={memoizedInterestRevealOptions}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

const outfitImages = [
  {
    src: "/gucci-gazelle-outfit.jpg",
    alt: "outfit with gucci gazelle",
  },
  {
    src: "/wales-bonner-outfit.jpg",
    alt: "outfit with adidas wales bonner",
  },
  {
    src: "/gucci-loafer-outfit.jpg",
    alt: "outfit with gucci loafer",
  },
  {
    src: "/birkenstock-boston-outfit.jpg",
    alt: "outfit with birkenstock boston",
  },
  {
    src: "/golden-goose-outfit.jpg",
    alt: "outfit with golden goose",
  },
];

const partyVideos = ["/franky-rizardo.mov", "/philipp.mov", "/ameme.mov"];
