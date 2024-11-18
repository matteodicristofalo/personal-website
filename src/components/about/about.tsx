import { Section } from "@/components/section/section";
import styles from "./about.module.scss";

export function About() {
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
          <div className={styles["interest__media"]} />
          <div className={styles["interest__title"]}>Music</div>
          <div className={styles["interest__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi!
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__media"]} />
          <div className={styles["interest__title"]}>Fashion</div>
          <div className={styles["interest__description"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            tenetur? Pariatur nemo minima iste, numquam reprehenderit beatae
            eligendi!
          </div>
        </div>

        <div className={styles["interest"]}>
          <div className={styles["interest__media"]} />
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
