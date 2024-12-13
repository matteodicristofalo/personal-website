"use client";

import { useEffect, useRef, useState, ImgHTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./image.module.scss";

export function Image(props: ImgHTMLAttributes<HTMLImageElement>) {
  const ref = useRef<HTMLImageElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const img = ref.current;

    if (!img) return;

    if (img.complete) setIsLoading(false);

    const onLoad = () => setIsLoading(false);

    img.addEventListener("load", onLoad);

    return () => {
      img.removeEventListener("load", onLoad);
    };
  }, []);

  return (
    <div
      className={clsx(styles["image"], {
        [styles["is-loading"]]: isLoading,
      })}
    >
      <img ref={ref} {...props} />
    </div>
  );
}
