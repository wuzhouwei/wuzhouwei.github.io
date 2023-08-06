---
id: zwzj_webpack
title: webpack配置
tags:
 - webpack配置
description: 这是一个了解一些webpack配置的页面。
keywords: [webpack配置]
---

----

 ```js
 const path = require("path");

/*
注意事项
对一个单独的 module 对象定义了 rules 属性，里面包含两个必须属性：test 和 use。这告诉 webpack 编译器(compiler) 

如下信息：

“嘿，webpack 编译器，当你碰到「在 require()/import 语句中被解析为 '.css' 的路径」时
，在你对它打包之前，先使用 'style-loader','css-loader' 转换一下。”
*/

module.exports = {
  entry: "./src/main.js", //唯一入口文件
  output: {
    //出口配置
    path: path.resolve(__dirname, "dist"), //打包后的文件存放的地方
    filename: "bundle.js", //打包后输出文件的文件名
  },
  //loader 让 webpack 能够去处理那些非 JavaScript 文件（webpack 自身只理解 JavaScript）。
  //loader 可以将所有类型的文件转换为 webpack 能够处理的有效模块，然后你就可以利用 webpack 的打包能力，对它们进行处理。
  module: {
    //模块 loader
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  //插件目的在于解决 loader 无法实现的其他事。
  plugins: [], //插件
};

 ```