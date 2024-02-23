---
id: reptile
title: 爬虫
tags:
  - 爬虫
description: 这是一个关于爬虫案例小case。
keywords: [ 爬虫case，测试爬取对应内容 ]
---

----

```js
const express = require("express");
const cheerio = require("cheerio");
const axios = require("axios");
const fs = require("fs");
const path = require("path");

const app = express();

let count = 1;
const url = `https://www.win3000.com/pic/mn/p${count}/`;

const reqs = async (url) => {
  const res = await axios.get(url);
  try {
    if (res) {
      const $ = cheerio.load(res.data);
      $(".mobilesize img").each((i, v) => {
        const fileName = $(v).attr("alt");
        const href = $(v).attr("data-src");
        downLoadPicture(href, fileName);
      });
    }
  } catch (error) {
  }
};

const downLoadPicture = async (url, fileName) => {
  try {
    // 确保 downloads 文件夹存在
    const downloadsPath = path.join(__dirname, "downloads");
    if (!fs.existsSync(downloadsPath)) {
      fs.mkdirSync(downloadsPath);
    }

    const response = await axios.get(url, {
      responseType: "stream",
    });
    const filePath = `./downloads/${fileName}.jpg`; // 设置保存文件的路径

    await response.data.pipe(fs.createWriteStream(filePath));

    return new Promise((resolve, reject) => {
      response.data.on("end", () => {
        console.log(`File downloaded successfully to: ${filePath}`);
        resolve(filePath);
      });

      response.data.on("error", (error) => {
        console.error("Error downloading file:", error);
        reject(error);
      });
    });
  } catch (error) {
    console.error("Error downloading file:", error);
    throw error;
  }
};

app.listen(3010, () => {
  reqs(url);
  console.log("3010启动成功");
});
```