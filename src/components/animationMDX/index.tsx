import React, { useRef, useState } from "react";
import styles from "./index.module.css";
import { LuckyGrid } from "@lucky-canvas/react";
//https://100px.net/docs/grid.html
const Index = () => {
  const [blocks] = useState([
    { padding: "10px", background: "#FFF0F5", borderRadius: 12 },
  ]);
  const [prizes] = useState([
    {
      x: 0,
      y: 0,
      background: "#FFB6C1",
      fonts: [{ text: "Luck", top: "35%" }],
    },
    { x: 1, y: 0, background: "#4169E1", fonts: [{ text: "Bad", top: "35%" }] },
    {
      x: 2,
      y: 0,
      background: "#00FFFF",
      fonts: [{ text: "Luck", top: "35%" }],
    },
    { x: 2, y: 1, background: "#00FF7F", fonts: [{ text: "Bad", top: "35%" }] },
    {
      x: 2,
      y: 2,
      background: "#FFD700",
      fonts: [{ text: "Luck", top: "35%" }],
    },
    { x: 1, y: 2, background: "#FF7F50", fonts: [{ text: "Bad", top: "35%" }] },
    {
      x: 0,
      y: 2,
      background: "#FA8072",
      fonts: [{ text: "Luck", top: "35%" }],
    },
    { x: 0, y: 1, background: "#7FFFAA", fonts: [{ text: "Bad", top: "35%" }] },
  ]);
  const [buttons] = useState([
    {
      x: 1,
      y: 1,
      background: "#7f95d1",
      fonts: [{ text: "GO", top: "35%" }],
    },
  ]);
  const [activeStyle] = useState({
    background: "#fff",
  });
  const myLucky = useRef<any>();
  const props = {
    width: 300,
    height: 300,
    blocks,
    prizes,
    buttons,
    activeStyle,
    onStart: () => {
      myLucky.current.play();
      setTimeout(() => {
        const index = (Math.random() * 6) >> 0;
        myLucky.current.stop(index);
      }, 2500);
    },
    onEnd: (prize) => {
      alert("恭喜你抽到了 " + prize.fonts[0].text);
    },
  };
  return (
    <div className={styles.wrap}>
      <LuckyGrid ref={myLucky} {...props} />
    </div>
  );
};

export default Index;
