---
id: frame_animation
title: 图片转视频播放效果
description: 这是一个关于图片转视频播放效果的记录。
keywords: [img, video, react]
tags:
- FrameAnimation
---

---

## 主要代码

> 此案例在 next.js 中测试

```tsx
import React, {useEffect, useRef} from "react";

interface FrameAnimationProps {
  frames: string[]; //图片文件路径数组
  fps: number; //播放速度
  width: number;
  height: number;
}

const FrameAnimation: React.FC<FrameAnimationProps> = ({
                                                         frames,
                                                         fps,
                                                         width,
                                                         height,
                                                       }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameIndex = useRef(0);
  const imgRefs = useRef<HTMLImageElement[]>([]);
  const allImagesLoaded = useRef(false); // 用来存储所有图片是否加载完成

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    let loadedCount = 0; // 用来跟踪已加载图片的数量
    imgRefs.current = frames.map((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => { // 每张图片加载时增加计数器
        loadedCount += 1;
        if (loadedCount === frames.length) { // 所有图片加载完毕
          allImagesLoaded.current = true;
        }
      };
      return img;
    });

    const interval = setInterval(() => {
      if (!allImagesLoaded.current) return; // 如果所有图片没有加载完毕，则不进行动画

      const canvas = canvasRef.current;
      if (!canvas) return;
      const context = canvas.getContext("2d");
      if (!context) return;
      const currentImage = imgRefs.current[frameIndex.current % frames.length];
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(
        currentImage,
        0,
        0,
        currentImage.width,
        currentImage.height,
        0,
        0,
        width,
        height
      );
      frameIndex.current += 1;
    }, 1000 / fps);

    return () => clearInterval(interval); // Clear interval when component is unmounted
  }, [frames, fps, width, height]);

  return <canvas ref={canvasRef} width={width} height={height}/>;
};

export default FrameAnimation;
```

## 使用

```ts
import FrameAnimation from "../../FrameAnimation";

const frames = Array.from(
  {length: 261},
  (_, i) => `/videoImgs/sdsd_${String(i).padStart(4, "0")}.png`
);

<FrameAnimation frames = {frames}
fps = {30}
width = {400}
height = {599}
/>;
```
