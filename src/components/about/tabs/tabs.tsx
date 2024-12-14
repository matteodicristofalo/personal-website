"use client";

import { ReactNode, useState } from "react";
import { TabButton } from "./tab-button";
import clsx from "clsx";
import styles from "./tabs.module.scss";

type TabsProps = {
  tabs: Tab[];
  activeTabIndex: number;
  setActiveTab: (index: number) => void;
};

type Tab = {
  name: string;
  content: ReactNode;
};

export function Tabs({ tabs, activeTabIndex, setActiveTab }: TabsProps) {
  const [translateX, setTranslateX] = useState(0);
  const activeTab = tabs[activeTabIndex];

  return (
    <>
      <div className={styles["tabs__wrapper"]}>
        <ul
          className={styles["tabs"]}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {tabs.map((tab, index) => (
            <li
              key={index}
              className={clsx(styles["tab"], {
                [styles["is-active"]]: activeTabIndex === index,
              })}
            >
              <TabButton
                onClick={(width: number) => {
                  const newTranslateX = -1 * (index * width);
                  setTranslateX(newTranslateX);
                  setActiveTab(index);
                }}
              >
                {tab.name}
              </TabButton>
            </li>
          ))}
        </ul>
      </div>

      {activeTab.content}
    </>
  );
}
