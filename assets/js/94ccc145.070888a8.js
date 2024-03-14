"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[1201],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>s});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var g=a.createContext({}),o=function(t){var e=a.useContext(g),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=o(t.components);return a.createElement(g.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,g=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=o(n),m=r,s=d["".concat(g,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(s,l(l({ref:e},p),{},{components:n})):a.createElement(s,l({ref:e},p))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=m;var c={};for(var g in e)hasOwnProperty.call(e,g)&&(c[g]=e[g]);c.originalType=t,c[d]="string"==typeof t?t:r,l[1]=c;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7080:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));const i={id:"zwzj_git",title:"git\u90e8\u5206",tags:["git","git\u547d\u4ee4","git\u89c4\u8303"],description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",keywords:["git","git\u547d\u4ee4","git\u89c4\u8303"]},l=void 0,c={unversionedId:"tutorial-zwzj/zwzj_git",id:"tutorial-zwzj/zwzj_git",title:"git\u90e8\u5206",description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",source:"@site/docs/tutorial-zwzj/zwzj_git.md",sourceDirName:"tutorial-zwzj",slug:"/tutorial-zwzj/zwzj_git",permalink:"/docs/tutorial-zwzj/zwzj_git",draft:!1,tags:[{label:"git",permalink:"/docs/tags/git"},{label:"git\u547d\u4ee4",permalink:"/docs/tags/git\u547d\u4ee4"},{label:"git\u89c4\u8303",permalink:"/docs/tags/git\u89c4\u8303"}],version:"current",frontMatter:{id:"zwzj_git",title:"git\u90e8\u5206",tags:["git","git\u547d\u4ee4","git\u89c4\u8303"],description:"\u8fd9\u662f\u4e00\u4e2a\u4e86\u89e3git\u7684\u9875\u9762\u3002",keywords:["git","git\u547d\u4ee4","git\u89c4\u8303"]},sidebar:"tutorialSidebar",previous:{title:"react\u90e8\u5206\u603b\u7ed3",permalink:"/docs/tutorial-zwzj/zwzj_react"},next:{title:"webpack\u914d\u7f6e",permalink:"/docs/tutorial-zwzj/zwzj_webpack"}},g={},o=[{value:"git \u547d\u4ee4",id:"git-\u547d\u4ee4",level:2},{value:"git \u89c4\u8303",id:"git-\u89c4\u8303",level:2},{value:"\u5176\u4ed6",id:"\u5176\u4ed6",level:2},{value:"git \u67e5\u770b\u5df2\u6709\u5206\u652f\u60c5\u51b5\uff1a",id:"git-\u67e5\u770b\u5df2\u6709\u5206\u652f\u60c5\u51b5",level:3},{value:"git \u62c9\u53d6\u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868",id:"git-\u62c9\u53d6\u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868",level:3},{value:"\u67e5\u770b\u5f53\u524d\u7684\u4e0a\u6e38\u4ee3\u7801\u5e93",id:"\u67e5\u770b\u5f53\u524d\u7684\u4e0a\u6e38\u4ee3\u7801\u5e93",level:3},{value:"\u8bbe\u7f6e\u4e00\u4e2a\u4e0a\u6e38\u4ee3\u7801\u5e93\uff0c\u4e3a fork \u7684\u4ed3\u5e93\u5730\u5740",id:"\u8bbe\u7f6e\u4e00\u4e2a\u4e0a\u6e38\u4ee3\u7801\u5e93\u4e3a-fork-\u7684\u4ed3\u5e93\u5730\u5740",level:3},{value:"\u7248\u672c\u56de\u9000",id:"\u7248\u672c\u56de\u9000",level:3},{value:"\u56de\u9000\u591a\u6b21\u7248\u672c\u5408\u5e76\u63d0\u4ea4\u4e00\u6b21\u8bb0\u5f55",id:"\u56de\u9000\u591a\u6b21\u7248\u672c\u5408\u5e76\u63d0\u4ea4\u4e00\u6b21\u8bb0\u5f55",level:3},{value:"\u5c06\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e00\u6b21\u63d0\u4ea4\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u5206\u652f",id:"\u5c06\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e00\u6b21\u63d0\u4ea4\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u5206\u652f",level:3},{value:"\u4fee\u6539\u67d0\u4e00\u6b21commit\u4fe1\u606f",id:"\u4fee\u6539\u67d0\u4e00\u6b21commit\u4fe1\u606f",level:3}],p={toc:o},d="wrapper";function u(t){let{components:e,...i}=t;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"git-\u547d\u4ee4"},"git \u547d\u4ee4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git init  //\u521d\u59cb\u5316\u4e00\u4e2a\u672c\u5730\u4ed3\u5e93\n\ngit clone xxx  //\u514b\u9686\u9879\u76ee\n\ngit add xxx  //\u6dfb\u52a0xxx\u6587\u4ef6\u5230\u7f13\u51b2\u533a\n\ngit add .  //\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u7f13\u51b2\u533a\n\ngit add --all  //\u6dfb\u52a0\u6240\u6709\u6587\u4ef6\u5230\u7f13\u51b2\u533a(all\u53ef\u4ee5\u6dfb\u52a0\u88ab\u624b\u52a8\u5220\u9664\u7684\u6587\u4ef6\u800c\u52a0\".\"\u4e0d\u884c)\n\ngit commit -m  'xxx'  //\u63d0\u4ea4\u8bf4\u660e\n\ngit push  //\u63a8\u9001\u5230\u8fdc\u7a0b\u5e93\n\ngit fetch //\u4ece\u8fdc\u7a0b\u5206\u652f\u62c9\u53d6\u4ee3\u7801\n\ngit branch  //\u67e5\u770b\u5206\u652f \u5e26*\u7684\u8868\u793a\u5f53\u524d\u5206\u652f\n\ngit branch -d xxx  //\u5220\u9664xxx\u5206\u652f(\u672c\u5730\u5206\u652f)\n\ngit branch  xxx  //\u521b\u5efaxxx\u5206\u652f\n\ngit checkout xxx  //\u5207\u6362xxx\u5206\u652f\n\ngit checkout -b xxx  //\u521b\u5efa\u5206\u652f\u5e76\u5207\u6362\u5230\u521b\u5efa\u7684\u5206\u652f \uff08\u672c\u5730\u5206\u652f\uff09\n\ngit push  -u  origin xxx  //\u7b2c\u4e00\u6b21\u63a8\u9001\u5230\u8fdc\u7a0bxxx\u5206\u652f\n\ngit pull  //\u62c9\u53d6\u7ebf\u4e0a\u5206\u652f\u4ee3\u7801\n\ngit merge xxx  //\u5408\u5e76xxx\u7684\u5185\u5bb9\u5230\u5f53\u524d\u5206\u652f\n\ngit remote  //\u67e5\u770b\u5f53\u524d\u7684\u8fdc\u7a0b\u4ed3\u5e93\uff08\u4e0d\u662f\u5206\u652f\uff09\n\ngit push origin --delete xxx  //\u4ee5origin\u4ed3\u5e93\u4e3a\u4f8b\uff08\u53ef\u901a\u8fc7git remote\u67e5\u770b\u4ed3\u5e93\uff09\u5220\u9664xxx\u5206\u652f\uff08\u53ea\u5220\u9664\u8fdc\u7a0b\uff0c\u672c\u5730\u770b\u4e4b\u524d\u662f\u5426\u5b58\u5728\u53ef\u901a\u8fc7git branch -d xxx \u5220\u9664\uff09\n")),(0,r.kt)("h2",{id:"git-\u89c4\u8303"},"git \u89c4\u8303"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"<type>(<scope>): <subject>\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f\u5192\u53f7 : \u540e\u6709\u7a7a\u683c")),(0,r.kt)("p",null,"\u4f8b\u5982"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"feat(miniprogram): \u589e\u52a0\u4e86\u5c0f\u7a0b\u5e8f\u6a21\u677f\u6d88\u606f\u76f8\u5173\u529f\u80fd\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"scope \u9009\u586b\u8868\u793a commit \u7684\u4f5c\u7528\u8303\u56f4\uff0c\u5982\u6570\u636e\u5c42\u3001\u89c6\u56fe\u5c42\uff0c\u4e5f\u53ef\u4ee5\u662f\u76ee\u5f55\u540d\u79f0 subject \u5fc5\u586b\u7528\u4e8e\u5bf9 commit \u8fdb\u884c\u7b80\u77ed\u7684\u63cf\u8ff0 type\n\u5fc5\u586b\u8868\u793a\u63d0\u4ea4\u7c7b\u578b\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u503c\u6709\u4ee5\u4e0b\u51e0\u79cd\uff1a")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:"center"},"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"feat"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u65b0\u529f\u80fd feature")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"fix"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4fee\u590d bug")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"docs"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6587\u6863\u6ce8\u91ca")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"style"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u4ee3\u7801\u683c\u5f0f(\u4e0d\u5f71\u54cd\u4ee3\u7801\u8fd0\u884c\u7684\u53d8\u52a8)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"refactor"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u91cd\u6784\u3001\u4f18\u5316(\u65e2\u4e0d\u589e\u52a0\u65b0\u529f\u80fd\uff0c\u4e5f\u4e0d\u662f\u4fee\u590d bug)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"perf"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6027\u80fd\u4f18\u5316")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"test"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u589e\u52a0\u6d4b\u8bd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"chore"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6784\u5efa\u8fc7\u7a0b\u6216\u8f85\u52a9\u5de5\u5177\u7684\u53d8\u52a8")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"revert"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u56de\u9000")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"build"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u6253\u5305")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u7528\u4f8b\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," feat(transaction): listen transaction changes, show result dialog\n\n fix(swap): slippage calculation;\n")),(0,r.kt)("h2",{id:"\u5176\u4ed6"},"\u5176\u4ed6"),(0,r.kt)("h3",{id:"git-\u67e5\u770b\u5df2\u6709\u5206\u652f\u60c5\u51b5"},"git \u67e5\u770b\u5df2\u6709\u5206\u652f\u60c5\u51b5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git branch -a\n")),(0,r.kt)("h3",{id:"git-\u62c9\u53d6\u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868"},"git \u62c9\u53d6\u66f4\u65b0\u8fdc\u7a0b\u5206\u652f\u5217\u8868"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git remote update origin --prune\n")),(0,r.kt)("h3",{id:"\u67e5\u770b\u5f53\u524d\u7684\u4e0a\u6e38\u4ee3\u7801\u5e93"},"\u67e5\u770b\u5f53\u524d\u7684\u4e0a\u6e38\u4ee3\u7801\u5e93"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git remote -v\n")),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u4e00\u4e2a\u4e0a\u6e38\u4ee3\u7801\u5e93\u4e3a-fork-\u7684\u4ed3\u5e93\u5730\u5740"},"\u8bbe\u7f6e\u4e00\u4e2a\u4e0a\u6e38\u4ee3\u7801\u5e93\uff0c\u4e3a fork \u7684\u4ed3\u5e93\u5730\u5740"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git remote add upstream git@github.com:xxx/xxx.git\n")),(0,r.kt)("h3",{id:"\u7248\u672c\u56de\u9000"},"\u7248\u672c\u56de\u9000"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"\u901a\u8fc7 git log \u627e\u5230\u5bf9\u5e94\u7248\u672c\u53f7\n\ngit reset --hard 592998394d3fb466...\n\ngit push -f \u5f3a\u63a8\u4e0a\u53bb\n\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(5058).Z,width:"736",height:"508"})),(0,r.kt)("h3",{id:"\u56de\u9000\u591a\u6b21\u7248\u672c\u5408\u5e76\u63d0\u4ea4\u4e00\u6b21\u8bb0\u5f55"},"\u56de\u9000\u591a\u6b21\u7248\u672c\u5408\u5e76\u63d0\u4ea4\u4e00\u6b21\u8bb0\u5f55"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},'\u901a\u8fc7 git log \u627e\u5230\u9700\u8981\u56de\u9000\u5230\u7684\u8bb0\u5f55\u7684\u524d\u4e00\u4e2a\uff0c\u5982\u679c\u56de\u9000\u4e24\u4e2a\u7248\u672c\u7528\u7b2c\u4e09\u4e2a\u8bb0\u5f55\u7684\u7248\u672c\u53f7\n\ngit reset --soft c8e8edd4da950718f...\n\ngit commit -m "New combined commit message"\n\ngit push -f \u5f3a\u63a8\u4e0a\u53bb\n\n')),(0,r.kt)("h3",{id:"\u5c06\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e00\u6b21\u63d0\u4ea4\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u5206\u652f"},"\u5c06\u5176\u4ed6\u5206\u652f\u7684\u67d0\u4e00\u6b21\u63d0\u4ea4\u5408\u5e76\u5230\u53e6\u4e00\u4e2a\u5206\u652f"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5047\u8bbe a \u548c b \u5206\u652f,a\u7684\u67d0\u6b21\u63d0\u4ea4\u9700\u8981\u5408\u5e76\u5230b\u5206\u652f")),(0,r.kt)("p",null,"\u5207\u5230a\u5206\u652f\uff0c\u627e\u5230\u9700\u8981\u5408\u5e76\u7684\u54c8\u5e0c\u503c\u4f8b\uff1aa57d0c8b5e506493f41953fce0e1eb56663f8815"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git log\n")),(0,r.kt)("p",null,"\u5207\u6362\u5230b\u5206\u652f\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git cherry-pick a57d0c8b5e506493f41953fce0e1eb56663f8815\n")),(0,r.kt)("p",null,"\u5982\u679c\u6709\u51b2\u7a81\uff0cGit \u4f1a\u6682\u505c\u5408\u5e76\u5e76\u63d0\u793a\u4f60\u89e3\u51b3\u51b2\u7a81\u3002\u5728\u89e3\u51b3\u51b2\u7a81\u540e\uff0c\u7ee7\u7eed\u5408\u5e76\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-git"},"git cherry-pick --continue\n")),(0,r.kt)("h3",{id:"\u4fee\u6539\u67d0\u4e00\u6b21commit\u4fe1\u606f"},"\u4fee\u6539\u67d0\u4e00\u6b21commit\u4fe1\u606f"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5148\u627e\u5230\u8981\u4fee\u6539\u63d0\u4ea4\u8bb0\u5f55\u7684\u5730\u65b9")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git log\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(6677).Z,width:"671",height:"392"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"HEAD~N,N\u4e3a\u56de\u6eaf\u7684\u63d0\u4ea4\u6570\u91cf\uff08\u5305\u62ec\u60a8\u8981\u4fee\u6539\u7684\u63d0\u4ea4\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git rebase -i HEAD~2\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(1313).Z,width:"635",height:"554"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4fee\u6539\u63d0\u4ea4\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git commit --amend \n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(917).Z,width:"608",height:"315"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u7ee7\u7eed\u91cd\u65b0\u57fa\u7840\u8fc7\u7a0bs")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git rebase --continue\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(9981).Z,width:"441",height:"49"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8986\u76d6\u8fdc\u7a0b\u63d0\u4ea4\u5386\u53f2\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-gitexclude"},"git push --force\n\ngit log\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Alt text",src:n(168).Z,width:"735",height:"317"})))}u.isMDXComponent=!0},917:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/amend-63f94bb8d156efc6bc68796318429872.png"},9981:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/continue-685421d225c07704c55c5aa665ab0eaa.png"},168:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/force-7df70beb3e20107d2cd83b96478495d1.png"},6677:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/log-c511f3abaadf5ce61b65818a8f269b20.png"},1313:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/rebase-5c8d129d4088c34d31abccd39d9944be.png"},5058:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/git-22e38b53965303491faa1bb849fe943c.png"}}]);