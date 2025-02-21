import clsx from "clsx";
import styles from "./section.module.scss";
import { forwardRef } from "react";

type SectionProps = {
  title: string;
  subtitle?: string;
  minHeight?: boolean;
  id?: string;
  children: React.ReactNode;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { title, subtitle, minHeight = true, id, children },
  ref
) {
  return (
    <section
      ref={ref}
      id={id}
      className={styles["section"]}
      style={{ minHeight: minHeight ? "100vh" : "auto" }}
    >
      <div className="container">
        <div className={clsx("grid", styles["section__header"])}>
          <div className="col-12 col-lg-4">
            <h2 className={styles["section__header__title"]}>{title}</h2>
          </div>

          {subtitle && (
            <div className="col-12 col-lg-4">
              <h2 className={styles["section__header__subtitle"]}>
                {subtitle}
              </h2>
            </div>
          )}
        </div>

        {children}
      </div>
    </section>
  );
});
