import React, { FC, useEffect, useState } from "react";
import styles from "./index.module.css";

const SmokyText: FC<{ text: string }> = ({ text }) => {
  const [playKey, setPlayKey] = useState(0);
  const lines = text.split("");
  const t = lines.length;
  const s = 4 / t; // 每个字符的间隔

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayKey((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.smokyWrap} key={playKey}>
      {lines.map((char, index) => (
        <h3
          className={styles.smokyH3}
          key={index}
          style={{
            animationDelay: `${index * s}s`,
          }}
        >
          {char}
        </h3>
      ))}
    </div>
  );
};

export default SmokyText;
