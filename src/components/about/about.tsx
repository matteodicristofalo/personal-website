/* eslint-disable @next/next/no-img-element */

"use client";

import { useState } from "react";
import { Section } from "@/components/section/section";
import { Carousel } from "../carousel/carousel";
import styles from "./about.module.scss";
import { Video } from "../video/video";

export function About() {
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
    <Section number="03" title="About">
      <div className="grid">
        <div className="col-12 col-lg-6 start-lg-3">
          <p className={styles["about__paragraph"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi! In aperiam aspernatur deserunt ab illo odio quam, nemo
            corrupti nesciunt fugiat. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores, tenetur? Pariatur nemo minima iste,
            numquam reprehenderit beatae eligendi!
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
          <div className={styles["interest__carousel__container"]}>
            <Carousel slides={[]} />
          </div>
          <div className={styles["interest__title"]}>Music</div>
          <div className={styles["interest__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi!
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__carousel__container"]}>
            <Carousel slides={fashionSlides} />
          </div>
          <div className={styles["interest__title"]}>Fashion</div>
          <div className={styles["interest__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi!
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__carousel__container"]}>
            <Carousel
              onSlideChange={(index) => setActiveVideo(index)}
              slides={partySlides}
            />
          </div>
          <div className={styles["interest__title"]}>Party</div>
          <div className={styles["interest__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi!
          </div>
        </div>
      </div>
    </Section>
  );
}

const outfitImages = [
  {
    src: "/wales-bonner-outfit.jpg",
    alt: "outfit with adidas wales bonner",
  },
  {
    src: "/gucci-gazelle-outfit.jpg",
    alt: "outfit with gucci gazelle",
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
