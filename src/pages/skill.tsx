import React from "react";
import styles from "./index.module.css";
import { skill } from "@site/src/pages/_data";
import SkillIcon from "@site/static/media/skill/skill.svg";

export default function Index(): JSX.Element {
  return (
    <section className={styles.box}>
      <div className={styles.blockTitle}>
        <SkillIcon /> <span style={{ marginLeft: 10 }}>技能</span>
      </div>
      <div className={styles.skillWrap}>
        {skill.map((item, idx) => {
          const Component = item.component;
          return (
            <span key={idx} title={item.title} className={styles.skill}>
              <Component />
            </span>
          );
        })}
      </div>
    </section>
  );
}
