import React from "react";
import styles from "./index.module.css";
import { mediums } from "@site/src/pages/_data";
import PositionIcon from "@site/static/media/position.svg";

export default function Index(): JSX.Element {
  return (
    <section className={styles.box}>
      <div className={styles.blockTitle}>
        <PositionIcon /> <span style={{ marginLeft: 10 }}> China-Hangzhou</span>
      </div>
      <div className={styles.media}>
        {mediums.map((item, idx) => {
          const Component = item.component;
          return (
            <a key={idx} href={item.href} target={item.isBlank}>
              <Component />
            </a>
          );
        })}
      </div>
    </section>
  );
}
