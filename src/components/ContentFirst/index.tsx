import React, { memo } from "react";
import styles from "./index.module.css";
import fox from "@site/static/img/foxBig.webp";

const Index = memo(() => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div>
          <img src={fox} alt="fox" className={styles.headPortrait} />
        </div>
      </section>
    </div>
  );
});

export default Index;
