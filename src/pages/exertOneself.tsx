import React, { useState } from "react";
import styles from "./index.module.css";
import classNames from "classnames";

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const t = ["勇往直前", "迎难而上", "奋发图强", "加油⛽️"];

export default function Index(): JSX.Element {
  const [bubbles, setBubbles] = useState([]);
  const [animate, setAnimate] = useState(false);

  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 100);
    // 生成随机动画方向的气泡框
    const randomX = Math.random() * 200 - 100; // 随机偏移 -100 到 100 范围内
    const randomY = Math.random() * 200 + 100; // 随机偏移 100 到 300 范围内
    const randomRotation = Math.random() * 360; // 随机旋转角度
    const randomElement = t[Math.floor(Math.random() * t.length)];
    const randomColor = getRandomColor();

    const newBubble = {
      id: Date.now(), // 使用时间戳作为唯一 id
      randomX,
      randomY,
      randomRotation,
      randomElement,
      randomColor,
    };

    // 将新的气泡框添加到状态数组中
    setBubbles((prevBubbles) => [...prevBubbles, newBubble]);
  };

  const handleAnimationEnd = (id: Date) => {
    // 动画结束后移除气泡框
    setBubbles((prevBubbles) =>
      prevBubbles.filter((bubble) => bubble.id !== id)
    );
  };
  const box = classNames(styles.box, styles.bubbleWrap);

  const bubbleBtn = classNames(
    styles.bubbleBtn,
    animate ? styles.bubbleBtnAnimate : ""
  );

  console.log(bubbles);
  return (
    <section className={box}>
      <div onClick={handleClick} className={bubbleBtn}>
        <span>
          快速点击 <br />
          给自己打气
        </span>
      </div>
      <div>
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className={styles.bubble}
            style={{
              animationDelay: `${
                (bubble.animationStartTime - Date.now()) / 1000
              }s`, // 每个气泡的动画延迟
              transform: `rotate(${bubble.randomRotation}deg)`, // 随机旋转
              left: `calc(50% + ${bubble.randomX}px)`, // 随机水平偏移
              bottom: `${bubble.randomY}px`, // 随机垂直偏移
              backgroundColor: `${bubble.randomColor}`,
            }}
            onAnimationEnd={() => handleAnimationEnd(bubble.id)} // 动画结束时移除
          >
            {bubble.randomElement}
          </div>
        ))}
      </div>
    </section>
  );
}
