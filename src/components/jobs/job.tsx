"use client";

import { useMemo } from "react";
import { SplitTextReveal } from "@/libs/text-animations/components/split-text-reveal/split-text-reveal";
import clsx from "clsx";
import styles from "./job.module.css";

type JobProps = {
  company: {
    name: string;
    logo: string;
  };
  role: string;
  period: string;
  description: string;
};

export function Job({ company, role, period, description }: JobProps) {
  const memoizedRevealOptions = useMemo(() => ({ stagger: 0.001 }), []);

  return (
    <div className={clsx("grid", styles["job"])}>
      <div className="col-4 start-2">
        <div className={styles["job__details"]}>
          <img
            src={company.logo}
            alt={company.name}
            className={styles["job__details__company__logo"]}
          />
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

      <div className="col-6">
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
