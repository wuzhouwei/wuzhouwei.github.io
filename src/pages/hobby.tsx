import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { hobby } from "@site/src/pages/_data";
import HobbyIcon from "@site/static/media/hobby/hobby.svg";

export default function Index(): JSX.Element {
  const hobbyText = classNames(styles.hobby, styles.bouncingHobby);
  return (
    <section className={styles.box}>
      <div className={styles.blockTitle}>
        <HobbyIcon /> <span style={{ marginLeft: 10 }}>爱好</span>
      </div>
      <div className={styles.hobbyWrap}>
        {hobby.map((item, idx) => {
          const Component = item.component;
          return (
            <span key={idx} className={hobbyText}>
              <Component />
              <div style={{ marginLeft: 10 }}>
                {item.value.split("").map((char, index) => (
                  <span
                    key={index}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {char}
                  </span>
                ))}
              </div>
            </span>
          );
        })}
      </div>
    </section>
  );
}
