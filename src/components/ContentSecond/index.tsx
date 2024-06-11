import React, { memo } from "react";
import styles from "./index.module.css";
import Email from "../Email";

const Index = memo(() => {
  return (
    <section className={styles.section}>
      <Email />
    </section>
  );
});

export default Index;
