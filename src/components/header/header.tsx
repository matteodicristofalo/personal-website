"use client";

import { useState } from "react";
import { SplitTextRotate } from "@/libs/text-animations/components/split-text-rotate/split-text-rotate";
import clsx from "clsx";
import styles from "./header.module.css";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

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
        <ul className={styles["header__menu__links"]}>
          <li>
            <a href="#" className={styles["header__menu__link"]}>
              <SplitTextRotate text="Jobs" />
            </a>
          </li>
          <li>
            <a href="#" className={styles["header__menu__link"]}>
              <SplitTextRotate text="Skills" />
            </a>
          </li>
          <li>
            <a href="#" className={styles["header__menu__link"]}>
              <SplitTextRotate text="About" />
            </a>
          </li>
          <li>
            <a href="#" className={styles["header__menu__link"]}>
              <SplitTextRotate text="Contacts" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
