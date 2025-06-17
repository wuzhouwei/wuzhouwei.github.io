import React from "react";
import styles from "./index.module.css";
import useIsBrowser from "@docusaurus/useIsBrowser";

type CircleTextProps = {
  texts: string[];
  radius?: number; //圆半径
  size?: number; //球的宽高
};

const CircleText: React.FC<CircleTextProps> = ({
  texts,
  radius = 90,
  size = 30,
}) => {
  const isBrowser = useIsBrowser();

  if (!isBrowser) return null; // SSR 阶段不渲染

  return (
    <div
      className={styles.roundWrap}
      style={{
        width: `${2 * radius}px`,
        height: `${2 * radius}px`,
        position: "relative",
      }}
    >
      <div className={styles.rotating}>
        {texts.map((char, index) => {
          const count = texts.length;
          const angleDeg = (360 / count) * index;
          const angleRad = (angleDeg * Math.PI) / 180;

          const cx = radius;
          const cy = radius;

          // 圆心在容器正中（假设容器宽高 2*radius）
          const x = cx + radius * Math.cos(angleRad);
          const y = cy + radius * Math.sin(angleRad);

          return (
            <span
              key={index}
              className={styles.char}
              style={{
                position: "absolute",
                top: `${y - size / 2}px`,
                left: `${x - size / 2}px`,
                width: `${size}px`,
                height: `${size}px`,
                lineHeight: `${size}px`,
                textAlign: "center",
              }}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CircleText;
