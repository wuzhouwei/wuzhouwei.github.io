import React, { useEffect, useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import ContentFirst from "@site/src/components/ContentFirst";
import ContentSecond from "@site/src/components/ContentSecond";
import { data, point } from "@site/src/components/ContentSecond/_data";
import Typed from "typed.js";

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
  return (
    <Layout>
      <div className={styles.adornBg} />
      <article className={styles.contentWrap}>
        <ContentFirst />
        <div className={styles.cardWrap}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <h3 className={styles.title}>{item.keys}</h3>
              <span>{item.value}</span>
            </div>
          ))}
        </div>
        <div className={styles.font}>
          <span className={styles.text} ref={el} />
        </div>
        <ContentSecond />
      </article>
    </Layout>
  );
}
