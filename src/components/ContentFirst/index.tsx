import React, { memo } from "react";
import Link from "@docusaurus/Link";
import Github from "@site/static/img/github.svg";
import styles from "./index.module.css";
import fox from "@site/static/img/fox.png";

const Index = memo(() => {
  return (
    <div className={styles.content}>
      <section className={styles.section}>
        <div>
          <img src={fox} alt="" className={styles.headPortrait} />
        </div>
        <div className={styles.name}>御心狐</div>
        <div className={styles.job}>(前端开发)</div>
        <div>
          <Link href="//github.com/wuzhouwei">
            <Github className={styles.githubIcon} />
          </Link>
        </div>
      </section>
    </div>
  );
});

export default Index;
