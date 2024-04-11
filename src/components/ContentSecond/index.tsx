import React, { memo, useEffect, useRef } from "react";
import { data, point } from "./_data";
import styles from "./index.module.css";
import Email from "../Email";
import Typed from "typed.js";

const Index = memo(() => {
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
    <section className={styles.section}>
      <div className={styles.leftWrap}>
        {data.map((item) => (
          <div className={styles.item} key={item.id}>
            <span className={styles.key}>{item.keys}</span>
            <span className={styles.value}> {item.values}</span>
          </div>
        ))}
      </div>
      <div className={styles.rightWrap}>
        <div>
          <span className={styles.text} ref={el} />
        </div>
        <Email />
      </div>
    </section>
  );
});

export default Index;
