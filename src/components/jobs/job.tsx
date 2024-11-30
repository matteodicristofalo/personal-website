/* eslint-disable @next/next/no-img-element */

"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@matteodicristofalo/text-animations";
import clsx from "clsx";
import styles from "./job.module.scss";

type JobProps = {
  company: {
    name: string;
    logo?: string;
  };
  role: string;
  period: string;
  description: string;
};

export function Job({ company, role, period, description }: JobProps) {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.001 }), []);

  return (
    <div className={clsx("grid", styles["job"])}>
      <div
        className={clsx(styles["company__logo__container"], "col-12 col-lg-4")}
      >
        <img
          className={styles["company__logo"]}
          src={company.logo}
          alt={company.name}
        />
      </div>

      <div
        className={clsx(styles["job__details__container"], "col-12 col-lg-4")}
      >
        <div className={styles["job__details"]}>
          <h3 className={styles["job__details__company__name"]}>
            <SplitTextReveal text={company.name} />
          </h3>
          <p className={styles["job__details__role"]}>
            <SplitTextReveal text={role} />
          </p>
          <p className={styles["job__details__period"]}>
            <SplitTextReveal text={period} />
          </p>
        </div>
      </div>

      <div
        className={clsx(
          styles["job__description__container"],
          "col-12 col-lg-6"
        )}
      >
        <div className={styles["job__description"]}>
          <p>
            <SplitTextReveal
              text={description}
              splitType="word"
              revealOptions={memoizedRevealOptions}
            />
          </p>
        </div>
      </div>
    </div>
  );
}
