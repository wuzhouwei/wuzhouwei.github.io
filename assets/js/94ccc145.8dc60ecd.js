"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1201],{3905:(t,e,r)=>{r.d(e,{Zo:()=>g,kt:()=>s});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),p=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},g=function(t){var e=p(t.components);return n.createElement(c.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,i=t.originalType,c=t.parentName,g=l(t,["components","mdxType","originalType","parentName"]),d=p(r),u=a,s=d["".concat(c,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(s,o(o({ref:e},g),{},{components:r})):n.createElement(s,o({ref:e},g))}));function s(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7080:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={id:"zwzj_git",title:"git\u90e8\u5206",tags:["git","git\u547d\u4ee4","git\u89c4\u8303"],description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",keywords:["git","git\u547d\u4ee4","git\u89c4\u8303"]},o=void 0,l={unversionedId:"tutorial-zwzj/zwzj_git",id:"tutorial-zwzj/zwzj_git",title:"git\u90e8\u5206",description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",source:"@site/docs/tutorial-zwzj/zwzj_git.md",sourceDirName:"tutorial-zwzj",slug:"/tutorial-zwzj/zwzj_git",permalink:"/docs/tutorial-zwzj/zwzj_git",tags:[{label:"git",permalink:"/docs/tags/git"},{label:"git\u547d\u4ee4",permalink:"/docs/tags/git\u547d\u4ee4"},{label:"git\u89c4\u8303",permalink:"/docs/tags/git\u89c4\u8303"}],version:"current",frontMatter:{id:"zwzj_git",title:"git\u90e8\u5206",tags:["git","git\u547d\u4ee4","git\u89c4\u8303"],description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",keywords:["git","git\u547d\u4ee4","git\u89c4\u8303"]},sidebar:"tutorialSidebar",previous:{title:"react\u90e8\u5206\u603b\u7ed3",permalink:"/docs/tutorial-zwzj/zwzj_react"},next:{title:"webpack\u914d\u7f6e",permalink:"/docs/tutorial-zwzj/zwzj_webpack"}},c={},p=[{value:"git \u547d\u4ee4",id:"git-\u547d\u4ee4",level:2},{value:"git \u89c4\u8303",id:"git-\u89c4\u8303",level:2}],g={toc:p},d="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(d,(0,n.Z)({},g,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"git-\u547d\u4ee4"},"git \u547d\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-git"},"git init  //\u521d\u59cb\u5316\u4e00\u4e2a\u672c\u5730\u4ed3\u5e93\n\ngit clone xxx  //\u514b\u9686\u9879\u76ee\n\ngit add xxx  //\u6dfb\u52a0xxx\u6587\u4ef6\u5230\u7f13\u51b2\u533a\n\ngit add .  //\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u7f13\u51b2\u533a\n\ngit add --all  //\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u7f13\u51b2\u533a(all\u53ef\u4ee5\u6dfb\u52a0\u88ab\u624b\u52a8\u5220\u9664\u7684\u6587\u4ef6\u800c\u52a0\".\"\u4e0d\u884c)\n\ngit commit -m  'xxx'  //\u63d0\u4ea4\u8bf4\u660e\n\ngit push  //\u63a8\u9001\u5230\u8fdc\u7a0b\u5e93\n\ngit fetch //\u4ece\u8fdc\u7a0b\u5206\u652f\u62c9\u53d6\u4ee3\u7801\n\ngit branch  //\u67e5\u770b\u5206\u652f \u5e26*\u7684\u8868\u793a\u5f53\u524d\u5206\u652f\n\ngit branch -d xxx  //\u5220\u9664xxx\u5206\u652f(\u672c\u5730\u5206\u652f)\n\ngit branch  xxx  //\u521b\u5efaxxx\u5206\u652f\n\ngit checkout xxx  //\u5207\u6362xxx\u5206\u652f\n\ngit checkout -b xxx  //\u521b\u5efa\u5206\u652f\u5e76\u5207\u6362\u5230\u521b\u5efa\u7684\u5206\u652f \uff08\u672c\u5730\u5206\u652f\uff09\n\ngit push  -u  origin xxx  //\u7b2c\u4e00\u6b21\u63a8\u9001\u5230\u8fdc\u7a0bxxx\u5206\u652f\n\ngit pull  //\u62c9\u53d6\u7ebf\u4e0a\u5206\u652f\u4ee3\u7801\n\ngit merge xxx  //\u5408\u5e76xxx\u7684\u5185\u5bb9\u5230\u5f53\u524d\u5206\u652f\n\ngit remote  //\u67e5\u770b\u5f53\u524d\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff08\u4e0d\u662f\u5206\u652f\uff09\n\ngit push origin --delete xxx  //\u4ee5origin\u4ed3\u5e93\u4e3a\u4f8b\uff08\u53ef\u901a\u8fc7git remote\u67e5\u770b\u4ed3\u5e93\uff09\u5220\u9664xxx\u5206\u652f\uff08\u53ea\u5220\u9664\u8fdc\u7a0b\uff0c\u672c\u5730\u770b\u4e4b\u524d\u662f\u5426\u5b58\u5728\u53ef\u901a\u8fc7git branch -d xxx \u5220\u9664\uff09\n")),(0,a.kt)("h2",{id:"git-\u89c4\u8303"},"git \u89c4\u8303"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5192\u53f7 : \u540e\u6709\u7a7a\u683c")),(0,a.kt)("p",null,"\u4f8b\u5982"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"feat(miniprogram): \u589e\u52a0\u4e86\u5c0f\u7a0b\u5e8f\u6a21\u677f\u6d88\u606f\u76f8\u5173\u529f\u80fd\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"scope\u9009\u586b\u8868\u793acommit\u7684\u4f5c\u7528\u8303\u56f4\uff0c\u5982\u6570\u636e\u5c42\u3001\u89c6\u56fe\u5c42\uff0c\u4e5f\u53ef\u4ee5\u662f\u76ee\u5f55\u540d\u79f0 subject\u5fc5\u586b\u7528\u4e8e\u5bf9commit\u8fdb\u884c\u7b80\u77ed\u7684\u63cf\u8ff0 type\u5fc5\u586b\u8868\u793a\u63d0\u4ea4\u7c7b\u578b\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u503c\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"feat"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u529f\u80fd feature")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"fix"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u4fee\u590d bug")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"docs"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6587\u6863\u6ce8\u91ca")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"style"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u4ee3\u7801\u683c\u5f0f(\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"refactor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u6784\u3001\u4f18\u5316(\u65e2\u4e0d\u589e\u52a0\u65b0\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u590dbug)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"perf"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6027\u80fd\u4f18\u5316")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"test"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u589e\u52a0\u6d4b\u8bd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"chore"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"revert"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u56de\u9000")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"build"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u6253\u5305")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u7528\u4f8b\uff1a"),"  "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," feat(transaction): listen transaction changes, show result dialog  \n \n fix(swap): slippage calculation;\n")))}m.isMDXComponent=!0}}]);