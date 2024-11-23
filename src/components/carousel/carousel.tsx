"use client";

import { useState, ReactNode, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { EmblaOptionsType } from "embla-carousel";
import styles from "./carousel.module.scss";
import clsx from "clsx";

type Props = {
  slides: ReactNode[];
  options?: EmblaOptionsType;
  onSlideChange?: (index: number) => void;
};

export function Carousel({ slides, options, onSlideChange }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      const activeSlide = emblaApi.selectedScrollSnap();
      setActiveSlide(activeSlide);
      onSlideChange?.(activeSlide);
    };

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, setActiveSlide, onSlideChange]);

  return (
    <section className={styles["carousel"]}>
      <div className={styles["carousel__viewport"]} ref={emblaRef}>
        <div className={styles["carousel__container"]}>
          {slides.map((slide, index) => (
            <div className={styles["carousel__slide"]} key={index}>
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className={styles["carousel__controls"]}>
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={clsx(styles["carousel__dot"], {
              [styles["is-active"]]: index === activeSlide,
            })}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </section>
  );
}
