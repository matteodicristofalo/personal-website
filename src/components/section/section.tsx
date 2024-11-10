import clsx from "clsx";
import styles from "./section.module.css";

type SectionProps = {
  number: string;
  title: string;
  subtitle?: string;
  minHeight?: boolean;
  children: React.ReactNode;
};

export function Section({
  number,
  title,
  subtitle,
  minHeight = true,
  children,
}: SectionProps) {
  return (
    <section
      className={clsx("container", styles["section"])}
      style={{ minHeight: minHeight ? "100vh" : "auto" }}
    >
      <div className={clsx("grid", styles["section__header"])}>
        <div className="col-3">
          <span className={styles["section__header__number"]}>{number}/</span>
        </div>

        <div className="col-3">
          <h2 className={styles["section__header__title"]}>{title}</h2>
        </div>

        {subtitle && (
          <div className="col-3">
            <h2 className={styles["section__header__subtitle"]}>{subtitle}</h2>
          </div>
        )}
      </div>

      {children}
    </section>
  );
}
