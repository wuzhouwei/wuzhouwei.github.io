import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import ContentFirst from "@site/src/components/ContentFirst";
import ContentSecond from "@site/src/components/ContentSecond";

export default function Home(): JSX.Element {
  return (
    <Layout>
      <div className={styles.adornBg} />
      <article className={styles.contentWrap}>
        <ContentFirst />
        <ContentSecond />
      </article>
    </Layout>
  );
}
