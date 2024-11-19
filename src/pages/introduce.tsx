import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { introduce } from "@site/src/pages/_data";

export default function Index(): JSX.Element {
  const cardInfo = classNames(styles.box, styles.cardInfo);

  return (
    <div className={styles.cardWrap}>
      {introduce.map((item) => {
        const Component = item.component;
        return (
          <div key={item.id} className={cardInfo}>
            <div>
              <h3 className={styles.cardTitle}>{item.keys}</h3>
              <span className={styles.cardVal}>{item.value}</span>
            </div>
            <div className={styles.cardIcon}>
              <Component />
            </div>
          </div>
        );
      })}
    </div>
  );
}
