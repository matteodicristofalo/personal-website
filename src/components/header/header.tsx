"use client";

import { useState } from "react";
import { SplitTextRotate } from "@/libs/text-animations/components/split-text-rotate/split-text-rotate";
import clsx from "clsx";
import styles from "./header.module.scss";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToElement = (selector: string) => {
    setIsOpen(false);
    const element = document.querySelector(selector);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className={clsx("container", styles["header"])}>
        <button
          type="button"
          className={styles["header__menu__toggler"]}
          onClick={() => setIsOpen(!isOpen)}
        >
          <SplitTextRotate text={isOpen ? "Close" : "Menu"} />
        </button>
      </header>

      <div
        className={clsx(styles["header__menu"], {
          [styles["is-open"]]: isOpen,
        })}
      >
        <ul className={styles["header__menu__items"]}>
          <li>
            <button
              type="button"
              className={styles["header__menu__item"]}
              onClick={() => scrollToElement("#jobs")}
            >
              <SplitTextRotate text="Jobs" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles["header__menu__item"]}
              onClick={() => scrollToElement("#skills")}
            >
              <SplitTextRotate text="Skills" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles["header__menu__item"]}
              onClick={() => scrollToElement("#about")}
            >
              <SplitTextRotate text="About" />
            </button>
          </li>
          <li>
            <button
              type="button"
              className={styles["header__menu__item"]}
              onClick={() => scrollToElement("#contacts")}
            >
              <SplitTextRotate text="Contacts" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
