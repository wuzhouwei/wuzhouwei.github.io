import React from "react";
import classNames from "classnames";
import styles from "./index.module.css";
import { articleList } from "@site/src/pages/_data";
import ArrowRIcon from "@site/static/media/arrowR.svg";
import { Link } from "react-router-dom";

export default function Index(): JSX.Element {
  const articleBox = classNames(styles.box, styles.articleBox);

  return (
    <div className={styles.articleWrap}>
      {articleList.map((item, idx) => (
        <Link key={idx} className={articleBox} to={item.href}>
          <span>{item.title}</span> <ArrowRIcon className={styles.arrow} />
        </Link>
      ))}
    </div>
  );
}
