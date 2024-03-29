import React, { useEffect, useState } from "react";
import styles from "./index.module.css";

const Jump = ({ text }: { text: string }) => {
  return (
    <>
      {text.split("").map((char, index) => (
        <span
          className={styles.jumpingSpan}
          key={index}
          style={{
            animationDelay: `-${index * 0.7}s`,
          }}
        >
          {char}
        </span>
      ))}
    </>
  );
};

function Index() {
  const [duration] = useState<number>(30);
  const [timeRemaining, setTimeRemaining] = useState<number>(duration);
  const [isRunning, setIsRunning] = useState<boolean>(true);

  useEffect(() => {
    let countdownInterval: NodeJS.Timeout;

    if (isRunning) {
      const targetTime = new Date().getTime() + duration * 1000;
      const updateCountdown = () => {
        const currentTime = new Date().getTime();
        const remaining = Math.max(
          0,
          Math.floor((targetTime - currentTime) / 1000)
        );
        setTimeRemaining(remaining);

        if (remaining === 0) {
          location.href = "/";
          setIsRunning(false);
        }
      };
      countdownInterval = setInterval(updateCountdown);
    }
    return () => clearInterval(countdownInterval);
  }, [duration, isRunning]);

  return (
    <div className={styles.wrap}>
      <div className={styles.box}>
        <div className={styles.title}>
          <Jump text={"404"} />
        </div>
        <a href={"/"} className={styles.href}>
          👉
          <Jump text={"back"} />
          👈
        </a>
        <div>
          倒计时结束自动跳转: <Jump text={timeRemaining.toString()} />
        </div>
      </div>
    </div>
  );
}

export default Index;
