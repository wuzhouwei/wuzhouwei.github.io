"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1152],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(7462),o=(t(7294),t(3905));const a={id:"reptile",title:"\u722c\u866bdemo",tags:["\u722c\u866bdemo"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fdemo\u3002",keywords:["\u722c\u866bdemo\uff0c\u6d4b\u8bd5\u722c\u53d6\u5bf9\u5e94\u5185\u5bb9"]},i=void 0,l={unversionedId:"tutorial-demo/reptile",id:"tutorial-demo/reptile",title:"\u722c\u866bdemo",description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fdemo\u3002",source:"@site/docs/tutorial-demo/reptile.md",sourceDirName:"tutorial-demo",slug:"/tutorial-demo/reptile",permalink:"/docs/tutorial-demo/reptile",tags:[{label:"\u722c\u866bdemo",permalink:"/docs/tags/\u722c\u866bdemo"}],version:"current",frontMatter:{id:"reptile",title:"\u722c\u866bdemo",tags:["\u722c\u866bdemo"],description:"\u8fd9\u662f\u4e00\u4e2a\u5173\u4e8e\u722c\u866b\u6848\u4f8b\u5c0fdemo\u3002",keywords:["\u722c\u866bdemo\uff0c\u6d4b\u8bd5\u722c\u53d6\u5bf9\u5e94\u5185\u5bb9"]},sidebar:"tutorialSidebar",previous:{title:"github\u81ea\u52a8\u5316\u90e8\u7f72\u6559\u7a0b\uff08\u524d\u7aef\u90e8\u7f72\uff09",permalink:"/docs/tutorial-other/GitHub_automation"}},s={},c=[],u={toc:c},p="wrapper";function m(e){let{components:n,...t}=e;return(0,o.kt)(p,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const Koa = require(\"koa\");\nconst cheerio = require('cheerio');\nconst request = require('superagent');\nconst fs = require('fs');\nconst axios = require('axios');\nconst path = require('path');\nconst app = new Koa()\nlet allFilms = []\n\nlet isStop = false;\nlet count = 1\nlet url = `https://www.win3000.com/pic/mn/p${count}/`\nconst timer = setInterval(async () => {\n  ++count\n  let url = `https://www.win3000.com/pic/mn/p${count}/`\n\n  console.log(count);\n  fn(url)\n  if (isStop) {\n    clearInterval(timer)\n  }\n}, 3000)\n\nconst fn = async (url) => {\n  await reqs(url)\n    .then(res => {\n      isStop = false\n    })\n    .catch(async (err) => {\n      isStop = true\n\n      allFilms = deweight(allFilms)\n\n      await fs.writeFile('./films.json', JSON.stringify(allFilms), function (err) {\n        if (err) {\n          return console.log(\"\u5f80\u6587\u4ef6\u5199\u5165\u5185\u5bb9\u5931\u8d25\uff1a\")\n        }\n      })\n\n      await downLoadPictures(allFilms)\n\n    })\n}\n\nconst reqs = (url) => {\n  return new Promise((resolve, reject) => {\n    request\n      .get(url)\n      .then(res => {\n\n        const $ = cheerio.load(res.text)\n        $('.mobilesize img').each((i, v) => {\n\n          const obj = {\n            title: $(v).attr('alt'),\n            src: $(v).attr('data-src')\n          }\n          allFilms.push(obj)\n        })\n\n        resolve(allFilms)\n      }).catch(err => {\n        reject(err)\n      })\n\n  })\n}\n\nfn(url)\n\nconst downLoadPictures = async (data) => {\n  const result_list = data;\n  try {\n    for (let i = 0, len = result_list.length; i < len; i++) {\n      console.log(`\u5f00\u59cb\u4e0b\u8f7d\u7b2c${i + 1}\u5f20\u56fe\u7247!`);\n      await downLoadPicture(result_list[i].src);\n      await sleep(3000 * Math.random());\n      console.log(`\u7b2c${i + 1}\u5f20\u56fe\u7247\u4e0b\u8f7d\u6210\u529f!`);\n    }\n    return Promise.resolve();\n  } catch (e) {\n    console.log('\u5199\u5165\u6570\u636e\u5931\u8d25');\n    return Promise.reject(e)\n  }\n}\n\nconst downLoadPicture = async (href) => {\n  try {\n    const target_path = path.resolve(__dirname, `./public/${href.split('/').pop()}`);\n    console.log(target_path, 'target_pathtarget_path');\n    const response = await axios.get(href, {\n      responseType: 'stream'\n    });\n    await response.data.pipe(fs.createWriteStream(target_path));\n    console.log('\u5199\u5165\u6210\u529f');\n    return Promise.resolve();\n  } catch (e) {\n    console.log('\u5199\u5165\u6570\u636e\u5931\u8d25');\n    return Promise.reject(e)\n  }\n}\n\nconst sleep = (time) => {\n  return new Promise((resolve) => {\n    console.log(`\u81ea\u52a8\u7761\u7720\u4e2d\uff0c${time / 1000}\u79d2\u540e\u91cd\u65b0\u53d1\u9001\u8bf7\u6c42......`)\n    setTimeout(() => {\n      resolve();\n    }, time);\n  });\n}\n\napp.use(async ctx => {\n  ctx.body = 'Hello World';\n});\n\napp.listen(3000, () => {\n  console.log('3000\u542f\u52a8\u6210\u529f')\n})\n\n// \u53bb\u91cd\nconst deweight = (arr) => {\n  let obj = {}\n  arr = arr.reduce(function (data, item) {\n    console.log(obj[item.src])\n    obj[item.src] ? '' : obj[item.src] = true && data.push(item)\n    return data;\n  }, [])\n  return arr\n}\n\n")))}m.isMDXComponent=!0}}]);