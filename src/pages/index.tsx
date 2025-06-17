import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import { point } from "@site/src/pages/_data";
import Typed from "typed.js";
import fox from "@site/static/img/foxBig.webp";
import MediaPage from "./media";
import HobbyPage from "./hobby";
import SkillPage from "./skill";
import IntroducePage from "./introduce";
import ExertOneself from "./exertOneself";
import ArticleListPage from "./articleList";
import CircleText from "./circleText";
import SmokyText from "./smokyText";

export default function Home(): JSX.Element {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: point,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      smartBackspace: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const text =
    "怎么才能让兴趣一直保持下去呢，好难啊，干了那么多年还是一个小菜鸡，啥都会一点，啥都不精，哈哈哈！";
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrap}>
          <div className={styles.basic}>
            <section className={styles.picWrap}>
              <img src={fox} alt="fox" className={styles.headPortrait} />
              <div className={styles.circleTextWrap}>
                <CircleText texts={["御", "心", "狐", "🦊"]} />
              </div>
            </section>
            <MediaPage />
            <HobbyPage />
            <SkillPage />
          </div>
          <div className={styles.infoWrap}>
            <h2 className={styles.title}>I'm YuXinhu</h2>
            <p className={styles.introduce}>
              {text.split("").map((char, index) => (
                <span key={index} style={{ animationDelay: `${index * 0.1}s` }}>
                  {char}
                </span>
              ))}
            </p>
            <SmokyText text={"往事随风"} />
            <div className={styles.font}>
              <span className={styles.text} ref={el} />
            </div>
            <IntroducePage />
            <ExertOneself />
            <ArticleListPage />
          </div>
        </div>
      </div>
    </Layout>
  );
}
