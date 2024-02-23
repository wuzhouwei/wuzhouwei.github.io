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
const Koa = require("koa");
const cheerio = require('cheerio');
const request = require('superagent');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const app = new Koa()
let allFilms = []

let isStop = false;
let count = 1
let url = `https://www.win3000.com/pic/mn/p${count}/`
const timer = setInterval(async () => {
  ++count
  let url = `https://www.win3000.com/pic/mn/p${count}/`

  console.log(count);
  fn(url)
  if (isStop) {
    clearInterval(timer)
  }
}, 3000)

const fn = async (url) => {
  await reqs(url)
    .then(res => {
      isStop = false
    })
    .catch(async (err) => {
      isStop = true

      allFilms = deweight(allFilms)

      await fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {
        if (err) {
          return console.log("往文件写入内容失败：")
        }
      })

      await downLoadPictures(allFilms)

    })
}

const reqs = (url) => {
  return new Promise((resolve, reject) => {
    request
      .get(url)
      .then(res => {

        const $ = cheerio.load(res.text)
        $('.mobilesize img').each((i, v) => {

          const obj = {
            title: $(v).attr('alt'),
            src: $(v).attr('data-src')
          }
          allFilms.push(obj)
        })

        resolve(allFilms)
      }).catch(err => {
      reject(err)
    })

  })
}

fn(url)

const downLoadPictures = async (data) => {
  const result_list = data;
  try {
    for (let i = 0, len = result_list.length; i < len; i++) {
      console.log(`开始下载第${i + 1}张图片!`);
      await downLoadPicture(result_list[i].src);
      await sleep(3000 * Math.random());
      console.log(`第${i + 1}张图片下载成功!`);
    }
    return Promise.resolve();
  } catch (e) {
    console.log('写入数据失败');
    return Promise.reject(e)
  }
}

const downLoadPicture = async (href) => {
  try {
    const target_path = path.resolve(__dirname, `./public/${href.split('/').pop()}`);
    console.log(target_path, 'target_pathtarget_path');
    const response = await axios.get(href, {
      responseType: 'stream'
    });
    await response.data.pipe(fs.createWriteStream(target_path));
    console.log('写入成功');
    return Promise.resolve();
  } catch (e) {
    console.log('写入数据失败');
    return Promise.reject(e)
  }
}

const sleep = (time) => {
  return new Promise((resolve) => {
    console.log(`自动睡眠中，${time / 1000}秒后重新发送请求......`)
    setTimeout(() => {
      resolve();
    }, time);
  });
}

app.use(async ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000, () => {
  console.log('3000启动成功')
})

// 去重
const deweight = (arr) => {
  let obj = {}
  arr = arr.reduce(function (data, item) {
    console.log(obj[item.src])
    obj[item.src] ? '' : obj[item.src] = true && data.push(item)
    return data;
  }, [])
  return arr
}

```