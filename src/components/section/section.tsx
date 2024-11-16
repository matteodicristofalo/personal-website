import clsx from "clsx";
import styles from "./section.module.scss";

type SectionProps = {
  number: string;
  title: string;
  subtitle?: string;
  minHeight?: boolean;
  id?: string;
  children: React.ReactNode;
};

export function Section({
  number,
  title,
  subtitle,
  minHeight = true,
  id,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={styles["section"]}
      style={{ minHeight: minHeight ? "100vh" : "auto" }}
    >
      <div className="container">
        <div className={clsx("grid", styles["section__header"])}>
          <div className="col-12 col-lg-2">
            <span className={styles["section__header__number"]}>{number}/</span>
          </div>

          <div className="col-12 col-lg-3">
            <h2 className={styles["section__header__title"]}>{title}</h2>
          </div>

          {subtitle && (
            <div className="col-12 col-lg-3">
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
}
