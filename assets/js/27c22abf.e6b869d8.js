"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1152],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return t?n.createElement(m,i(i({ref:r},p),{},{components:t})):n.createElement(m,i({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},9339:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=t(7462),o=(t(7294),t(3905));const a={id:"reptile",title:"\u722c\u866b",tags:["\u722c\u866b"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fcase\u3002",keywords:["\u722c\u866bcase\uff0c\u6d4b\u8bd5\u722c\u53d6\u5bf9\u5e94\u5185\u5bb9"]},i=void 0,s={unversionedId:"tutorial-demo/reptile",id:"tutorial-demo/reptile",title:"\u722c\u866b",description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fcase\u3002",source:"@site/docs/tutorial-demo/reptile.md",sourceDirName:"tutorial-demo",slug:"/tutorial-demo/reptile",permalink:"/docs/tutorial-demo/reptile",draft:!1,tags:[{label:"\u722c\u866b",permalink:"/docs/tags/\u722c\u866b"}],version:"current",frontMatter:{id:"reptile",title:"\u722c\u866b",tags:["\u722c\u866b"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fcase\u3002",keywords:["\u722c\u866bcase\uff0c\u6d4b\u8bd5\u722c\u53d6\u5bf9\u5e94\u5185\u5bb9"]},sidebar:"tutorialSidebar",previous:{title:"github\u81ea\u52a8\u5316\u90e8\u7f72\u6559\u7a0b2\uff08\u524d\u7aef\u90e8\u7f72\uff09",permalink:"/docs/tutorial-other/GitHub_automation2"},next:{title:"websocket",permalink:"/docs/tutorial-demo/websocket"}},c={},l=[],p={toc:l},u="wrapper";function d(e){let{components:r,...t}=e;return(0,o.kt)(u,(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'const express = require("express");\nconst cheerio = require("cheerio");\nconst axios = require("axios");\nconst fs = require("fs");\nconst path = require("path");\n\nconst app = express();\n\nlet count = 1;\nconst url = `https://www.win3000.com/pic/mn/p${count}/`;\n\nconst reqs = async (url) => {\n  const res = await axios.get(url);\n  try {\n    if (res) {\n      const $ = cheerio.load(res.data);\n      $(".mobilesize img").each((i, v) => {\n        const fileName = $(v).attr("alt");\n        const href = $(v).attr("data-src");\n        downLoadPicture(href, fileName);\n      });\n    }\n  } catch (error) {\n  }\n};\n\nconst downLoadPicture = async (url, fileName) => {\n  try {\n    // \u786e\u4fdd downloads \u6587\u4ef6\u5939\u5b58\u5728\n    const downloadsPath = path.join(__dirname, "downloads");\n    if (!fs.existsSync(downloadsPath)) {\n      fs.mkdirSync(downloadsPath);\n    }\n\n    const response = await axios.get(url, {\n      responseType: "stream",\n    });\n    const filePath = `./downloads/${fileName}.jpg`; // \u8bbe\u7f6e\u4fdd\u5b58\u6587\u4ef6\u7684\u8def\u5f84\n\n    await response.data.pipe(fs.createWriteStream(filePath));\n\n    return new Promise((resolve, reject) => {\n      response.data.on("end", () => {\n        console.log(`File downloaded successfully to: ${filePath}`);\n        resolve(filePath);\n      });\n\n      response.data.on("error", (error) => {\n        console.error("Error downloading file:", error);\n        reject(error);\n      });\n    });\n  } catch (error) {\n    console.error("Error downloading file:", error);\n    throw error;\n  }\n};\n\napp.listen(3010, () => {\n  reqs(url);\n  console.log("3010\u542f\u52a8\u6210\u529f");\n});\n')))}d.isMDXComponent=!0}}]);