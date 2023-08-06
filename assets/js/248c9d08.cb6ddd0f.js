"use strict";(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[8575],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),m=a,k=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return t?r.createElement(k,l(l({ref:n},u),{},{components:t})):r.createElement(k,l({ref:n},u))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var s={};for(var i in n)hasOwnProperty.call(n,i)&&(s[i]=n[i]);s.originalType=e,s[c]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<o;p++)l[p]=t[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},102:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={id:"zwzj_react",title:"react\u90e8\u5206\u603b\u7ed3",tags:["react","\u7236\u5b50\u7ec4\u4ef6","\u751f\u547d\u5468\u671f","redux","HOC","Hooks"],description:"\u8fd9\u662f\u4e00\u4e2areact\u90e8\u5206\u603b\u7ed3\u7684\u9875\u9762\u3002",keywords:["react\u90e8\u5206\u603b\u7ed3","react","\u7236\u5b50\u7ec4\u4ef6","\u751f\u547d\u5468\u671f","HOC","redux","Hooks\u7b49"]},l=void 0,s={unversionedId:"tutorial-zwzj/zwzj_react",id:"tutorial-zwzj/zwzj_react",title:"react\u90e8\u5206\u603b\u7ed3",description:"\u8fd9\u662f\u4e00\u4e2areact\u90e8\u5206\u603b\u7ed3\u7684\u9875\u9762\u3002",source:"@site/docs/tutorial-zwzj/zwzj_react.md",sourceDirName:"tutorial-zwzj",slug:"/tutorial-zwzj/zwzj_react",permalink:"/docs/tutorial-zwzj/zwzj_react",tags:[{label:"react",permalink:"/docs/tags/react"},{label:"\u7236\u5b50\u7ec4\u4ef6",permalink:"/docs/tags/\u7236\u5b50\u7ec4\u4ef6"},{label:"\u751f\u547d\u5468\u671f",permalink:"/docs/tags/\u751f\u547d\u5468\u671f"},{label:"redux",permalink:"/docs/tags/redux"},{label:"HOC",permalink:"/docs/tags/hoc"},{label:"Hooks",permalink:"/docs/tags/hooks"}],version:"current",frontMatter:{id:"zwzj_react",title:"react\u90e8\u5206\u603b\u7ed3",tags:["react","\u7236\u5b50\u7ec4\u4ef6","\u751f\u547d\u5468\u671f","redux","HOC","Hooks"],description:"\u8fd9\u662f\u4e00\u4e2areact\u90e8\u5206\u603b\u7ed3\u7684\u9875\u9762\u3002",keywords:["react\u90e8\u5206\u603b\u7ed3","react","\u7236\u5b50\u7ec4\u4ef6","\u751f\u547d\u5468\u671f","HOC","redux","Hooks\u7b49"]},sidebar:"tutorialSidebar",previous:{title:"js\u90e8\u5206",permalink:"/docs/tutorial-zwzj/zwzj_js"},next:{title:"git\u90e8\u5206",permalink:"/docs/tutorial-zwzj/zwzj_git"}},i={},p=[{value:"1.\u7236\u5b50\u7ec4\u4ef6\u4f20\u503c",id:"1\u7236\u5b50\u7ec4\u4ef6\u4f20\u503c",level:2},{value:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u7c7b\u7ec4\u4ef6)",id:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u7c7b\u7ec4\u4ef6",level:3},{value:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u51fd\u6570\u7ec4\u4ef6)",id:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u51fd\u6570\u7ec4\u4ef6",level:3},{value:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u7c7b\u7ec4\u4ef6)",id:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u7c7b\u7ec4\u4ef6",level:3},{value:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u51fd\u6570\u7ec4\u4ef6)",id:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u51fd\u6570\u7ec4\u4ef6",level:3},{value:"2.ref\u83b7\u53d6DOM(\u7c7b\u7ec4\u4ef6)",id:"2ref\u83b7\u53d6dom\u7c7b\u7ec4\u4ef6",level:2},{value:"3.React \u4e2d\u7684 props \u662f\u4ec0\u4e48state\u662f\u4ec0\u4e48?",id:"3react-\u4e2d\u7684-props-\u662f\u4ec0\u4e48state\u662f\u4ec0\u4e48",level:2},{value:"4.\u751f\u547d\u5468\u671f",id:"4\u751f\u547d\u5468\u671f",level:2},{value:"5.\u4ec0\u4e48\u662f\u9ad8\u9636\u7ec4\u4ef6\uff08HOC\uff09?",id:"5\u4ec0\u4e48\u662f\u9ad8\u9636\u7ec4\u4ef6hoc",level:2},{value:"6.\u5982\u4f55\u5b9e\u73b0 Server Side Rendering \u6216 SSR?",id:"6\u5982\u4f55\u5b9e\u73b0-server-side-rendering-\u6216-ssr",level:2},{value:"7.\u6700\u6d41\u884c\u7684\u52a8\u753b\u8f6f\u4ef6\u5305\u662f\u4ec0\u4e48?",id:"7\u6700\u6d41\u884c\u7684\u52a8\u753b\u8f6f\u4ef6\u5305\u662f\u4ec0\u4e48",level:2},{value:"8.redux",id:"8redux",level:2},{value:"Redux \u9075\u5faa\u4e09\u4e2a\u57fa\u672c\u539f\u5219\uff1a",id:"redux-\u9075\u5faa\u4e09\u4e2a\u57fa\u672c\u539f\u5219",level:3},{value:"9.\u5e38\u7528Hook",id:"9\u5e38\u7528hook",level:2},{value:"Hook\u89c4\u5219",id:"hook\u89c4\u5219",level:3},{value:"useState",id:"usestate",level:3},{value:"useEffect",id:"useeffect",level:3},{value:"useRef",id:"useref",level:3},{value:"useMemo-useCallback",id:"usememo-usecallback",level:3}],u={toc:p},c="wrapper";function d(e){let{components:n,...o}=e;return(0,a.kt)(c,(0,r.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"1\u7236\u5b50\u7ec4\u4ef6\u4f20\u503c"},"1.\u7236\u5b50\u7ec4\u4ef6\u4f20\u503c"),(0,a.kt)("h3",{id:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u7c7b\u7ec4\u4ef6"},"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u7c7b\u7ec4\u4ef6)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u7236\u7ec4\u4ef6\n\nexport default class Parent extends Component {\n  handleF=()=>{\n     this.refsz.method('\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86')\n  }\n  render() {\n    return (\n      <div >\n        <Button onClick={this.handleF}>\u7236\u7ec4\u4ef6\u6309\u94ae</Button>\n        <Children refsZ={el=>this.refsz=el}/>\n      </div>\n    )\n  }\n}\n\n//\u5b50\u7ec4\u4ef6\n\nexport default class Children extends Component {\n  componentDidMount() {\n    this.props.refsZ(this)\n  }\n  method(arg){\n      console.log(arg,'\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5')\n  }\n    render() {\n        return  <></>\n    }\n}\n\n")),(0,a.kt)("h3",{id:"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u51fd\u6570\u7ec4\u4ef6"},"\u7236\u7ec4\u4ef6\u8c03\u7528\u5b50\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u51fd\u6570\u7ec4\u4ef6)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, { memo, useRef, useImperativeHandle, forwardRef} from \"react\";\nimport {Button} from \"antd\";\n\n//\u5b50\u7ec4\u4ef6\n\n//\u9700\u8981\u6ce8\u610f forwardRef \u548c useImperativeHandle\n\nconst Children = forwardRef((props, ref) => {\n  useImperativeHandle(ref, () => ({\n    clickChild\n  }))\n\n  const clickChild = (arg: any) => {\n    console.log(arg, '\u5b50\u7ec4\u4ef6\u7684\u65b9\u6cd5')\n  }\n\n  return (\n    <></>\n  )\n})\n\nexport default Children;\n\n//\u7236\u7ec4\u4ef6\n\nconst Parent = memo(() => {\n  const childRef = useRef<{clickChild:(arg:string)=>void} | null>(null);\n\n  const handleClick = () => {\n    childRef.current?.clickChild('\u7236\u7ec4\u4ef6\u8c03\u7528\u4e86')\n  }\n\n  return (\n    <div>\n      <Button onClick={handleClick}>\u6211\u662f\u7236\u6309\u94ae</Button>\n      <Children ref={childRef}/>\n    </div>\n  )\n})\n\nexport default Parent;\n")),(0,a.kt)("h3",{id:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u7c7b\u7ec4\u4ef6"},"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u7c7b\u7ec4\u4ef6)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"//\u7236\u7ec4\u4ef6\n\nexport default class Parent extends Component {\n  handleF=(...arg)=>{\n     console.log(arg,'(\u6211\u662f\u7236\u7ec4\u4ef6\u65b9\u6cd5)')\n  }\n  render() {\n    return (\n      <div >\n        <Children click={this.handleF}/>\n      </div>\n    )\n  }\n}\n\n//\u5b50\u7ec4\u4ef6\n\nexport default class Children extends Component {\n  handleClick=(e)=>{\n    this.props.click('(\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u7ed9\u7236\u7ec4\u4ef6\u4f20\u503c)','(\u65b9\u68482)',e)\n  }\n    render() {\n    const {click} = this.props\n        return  <>\n          <Button onClick={click.bind(this,'(\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u7ed9\u7236\u7ec4\u4ef6\u4f20\u503c)','(\u65b9\u68481)')}>\n            \u6211\u662f\u5b50\u7ec4\u4ef6\u7684\u6309\u94ae1\n          </Button>\n          <Button onClick={this.handleClick}>\u6211\u662f\u5b50\u7ec4\u4ef6\u7684\u6309\u94ae2</Button>\n        </>\n    }\n}\n")),(0,a.kt)("h3",{id:"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2\u51fd\u6570\u7ec4\u4ef6"},"\u5b50\u7ec4\u4ef6\u8c03\u7528\u7236\u7ec4\u4ef6\u65b9\u6cd5\u53ca\u4f20\u53c2(\u51fd\u6570\u7ec4\u4ef6)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {memo, FC} from \"react\";\nimport {Button} from \"antd\";\n\n//\u5b50\u7ec4\u4ef6\n\nconst Children: FC<{ click: (...arg: any) => void }> = memo(({click}) => {\n\n  return (\n    <div>\n      <Button onClick={() => click('\u5b50\u7ec4\u4ef6\u8c03\u7528\u6210\u529f', '\u5176\u4ed6')}>\u6211\u662f\u5b50\u7ec4\u4ef6</Button>\n    </div>\n  )\n})\n\nexport default Children;\n\n//\u7236\u7ec4\u4ef6\n\nconst Parent = memo(() => {\n\n  const handleClick = (...arg: any) => {\n    console.log(...arg, '\u6211\u662f\u7236\u7ec4\u4ef6')\n  }\n\n  return (\n    <div>\n      <Children click={handleClick}/>\n    </div>\n  )\n})\n\nexport default Parent;\n")),(0,a.kt)("h2",{id:"2ref\u83b7\u53d6dom\u7c7b\u7ec4\u4ef6"},"2.ref\u83b7\u53d6DOM(\u7c7b\u7ec4\u4ef6)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'export default class Parent extends Component {\n  constructor(props) {\n    super(props);\n    this.MyRef = React.createRef()\n  }\n  handleClick=_=>{\n    console.log(this.MyRef.current.value)\n  }\n  render() {\n    return (\n      <div>\n        <input type="text" ref={this.MyRef}/>\n        <Button onClick={this.handleClick}>\u83b7\u53d6</Button>\n      </div>\n    )\n  }\n}\n')),(0,a.kt)("h2",{id:"3react-\u4e2d\u7684-props-\u662f\u4ec0\u4e48state\u662f\u4ec0\u4e48"},"3.React \u4e2d\u7684 props \u662f\u4ec0\u4e48state\u662f\u4ec0\u4e48?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"props"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"props(\u53ea\u8bfb\u7ec4\u4ef6)"),"\u662f\u4e00\u4e2a\u4ece\u5916\u90e8\u4f20\u8fdb\u7ec4\u4ef6\u7684\u53c2\u6570\uff0c\u4e3b\u8981\u4f5c\u4e3a\u5c31\u662f\u4ece\u7236\u7ec4\u4ef6\u5411\u5b50\u7ec4\u4ef6\u4f20\u9012\u6570\u636e\uff0c\u5b83\u5177\u6709\u53ef\u8bfb\u6027\u548c\u4e0d\u53d8\u6027\uff0c\u53ea\u80fd\u901a\u8fc7\u5916\u90e8\u7ec4\u4ef6\u4e3b\u52a8\u4f20\u5165\u65b0\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"props"),"\u6765\u91cd\u65b0\u6e32\u67d3\u5b50\u7ec4\u4ef6\uff0c\u5426\u5219\u5b50\u7ec4\u4ef6\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"props"),"\u4ee5\u53ca\u5c55\u73b0\u5f62\u5f0f\u4e0d\u4f1a\u6539\u53d8\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"state"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"state(\u72b6\u6001)"),"\u7684\u4e3b\u8981\u4f5c\u7528\u662f\u7528\u4e8e\u7ec4\u4ef6\u4fdd\u5b58\u3001\u63a7\u5236\u4ee5\u53ca\u4fee\u6539\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u5b83\u53ea\u80fd\u5728",(0,a.kt)("inlineCode",{parentName:"strong"},"constructor"),"\u4e2d\u521d\u59cb\u5316\uff0c\u5b83\u7b97\u662f\u7ec4\u4ef6\u7684\u79c1\u6709\u5c5e\u6027\uff0c\u4e0d\u53ef\u901a\u8fc7\u5916\u90e8\u8bbf\u95ee\u548c\u4fee\u6539\uff0c\u53ea\u80fd\u901a\u8fc7\u7ec4\u4ef6\u5185\u90e8\u7684",(0,a.kt)("inlineCode",{parentName:"strong"},"this.setState"),"\u6765\u4fee\u6539\uff0c\u4fee\u6539",(0,a.kt)("inlineCode",{parentName:"strong"},"state"),"\u5c5e\u6027\u4f1a\u5bfc\u81f4\u7ec4\u4ef6\u7684\u91cd\u65b0\u6e32\u67d3\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u533a\u522b")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u662f\u7ec4\u4ef6\u81ea\u5df1\u7ba1\u7406\u6570\u636e\uff0c\u63a7\u5236\u81ea\u5df1\u7684\u72b6\u6001\uff0c\u53ef\u53d8\uff1b"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\u662f\u5916\u90e8\u4f20\u5165\u7684\u6570\u636e\u53c2\u6570\uff0c\u4e0d\u53ef\u53d8\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u53eb\u505a\u65e0\u72b6\u6001\u7ec4\u4ef6\uff0c\u6709",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u53eb\u505a\u6709\u72b6\u6001\u7ec4\u4ef6\uff1b"),(0,a.kt)("li",{parentName:"ol"},"\u591a\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\uff0c\u5c11\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u3002\u4e5f\u5c31\u662f\u591a\u5199\u65e0\u72b6\u6001\u7ec4\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\u7528\u4e8e\u5b9a\u4e49\u5916\u90e8\u63a5\u53e3\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u7528\u4e8e\u8bb0\u5f55\u5185\u90e8\u72b6\u6001"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\u7684\u8d4b\u503c\u5728\u4e8e\u5916\u90e8\u4e16\u754c\u4f7f\u7528\u7ec4\u4ef6\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u7684\u8d4b\u503c\u5728\u4e8e\u7ec4\u4ef6\u5185\u90e8"),(0,a.kt)("li",{parentName:"ol"},"\u7ec4\u4ef6\u4e0d\u5e94\u8be5\u6539\u53d8",(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\u7684\u503c\uff0c\u800c",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\u5b58\u5728\u7684\u76ee\u7684\u5c31\u662f\u8ba9\u7ec4\u4ef6\u6765\u4fee\u6539\u7684")),(0,a.kt)("h2",{id:"4\u751f\u547d\u5468\u671f"},"4.\u751f\u547d\u5468\u671f"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"\u751f\u547d\u5468\u671f",src:t(1518).Z,width:"1287",height:"515"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"React 16.3+"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getDerivedStateFromProps(nextProps, prevState):")," \u5728\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"render()"),"\u4e4b\u524d\u8c03\u7528\uff0c\u5e76\u5728 ",(0,a.kt)("em",{parentName:"li"},"\u6bcf\u6b21")," \u6e32\u67d3\u65f6\u8c03\u7528\u3002 \u9700\u8981\u4f7f\u7528\u6d3e\u751f\u72b6\u6001\u7684\u60c5\u51b5\u662f\u5f88\u7f55\u89c1\u5f97\u3002\u503c\u5f97\u9605\u8bfb ",(0,a.kt)("a",{parentName:"li",href:"https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html"},"\u5982\u679c\u4f60\u9700\u8981\u6d3e\u751f\u72b6\u6001"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentDidMount:")," \u9996\u6b21\u6e32\u67d3\u540e\u8c03\u7528\uff0c\u6240\u6709\u5f97 Ajax \u8bf7\u6c42\u3001DOM \u6216\u72b6\u6001\u66f4\u65b0\u3001\u8bbe\u7f6e\u4e8b\u4ef6\u76d1\u542c\u5668\u90fd\u5e94\u8be5\u5728\u6b64\u5904\u53d1\u751f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shouldComponentUpdate:")," \u786e\u5b9a\u7ec4\u4ef6\u662f\u5426\u5e94\u8be5\u66f4\u65b0\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u3002 \u5982\u679c\u4f60\u786e\u5b9a\u5728\u66f4\u65b0\u72b6\u6001\u6216\u5c5e\u6027\u540e\u4e0d\u9700\u8981\u6e32\u67d3\u7ec4\u4ef6\uff0c\u5219\u53ef\u4ee5\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u503c\u3002 \u5b83\u662f\u4e00\u4e2a\u63d0\u9ad8\u6027\u80fd\u7684\u597d\u5730\u65b9\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u4f60\u5728\u7ec4\u4ef6\u63a5\u6536\u65b0\u5c5e\u6027\u65f6\u963b\u6b62\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"getSnapshotBeforeUpdate(nextProps, prevState):")," \u5728\u6700\u65b0\u7684\u6e32\u67d3\u8f93\u51fa\u63d0\u4ea4\u7ed9 DOM \u524d\u5c06\u4f1a\u7acb\u5373\u8c03\u7528\uff0c\u8fd9\u5bf9\u4e8e\u4ece DOM \u6355\u83b7\u4fe1\u606f\uff08\u6bd4\u5982\uff1a\u6eda\u52a8\u4f4d\u7f6e\uff09\u5f88\u6709\u7528\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentDidUpdate:")," \u5b83\u4e3b\u8981\u7528\u4e8e\u66f4\u65b0 DOM \u4ee5\u54cd\u5e94 prop \u6216 state \u66f4\u6539\u3002 \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate()"),"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5219\u4e0d\u4f1a\u89e6\u53d1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentWillUnmount")," \u5f53\u4e00\u4e2a\u7ec4\u4ef6\u88ab\u4ece DOM \u4e2d\u79fb\u9664\u65f6\uff0c\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\uff0c\u53d6\u6d88\u7f51\u7edc\u8bf7\u6c42\u6216\u8005\u79fb\u9664\u4e0e\u8be5\u7ec4\u4ef6\u76f8\u5173\u7684\u4e8b\u4ef6\u76d1\u542c\u7a0b\u5e8f\u7b49\u5e94\u8be5\u5728\u8fd9\u91cc\u8fdb\u884c\u3002")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Before 16.3"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentWillMount:")," \u5728\u7ec4\u4ef6",(0,a.kt)("inlineCode",{parentName:"li"},"render()"),"\u524d\u6267\u884c\uff0c\u7528\u4e8e\u6839\u7ec4\u4ef6\u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u7ea7\u522b\u914d\u7f6e\u3002\u5e94\u8be5\u907f\u514d\u5728\u8be5\u65b9\u6cd5\u4e2d\u5f15\u5165\u4efb\u4f55\u7684\u526f\u4f5c\u7528\u6216\u8ba2\u9605\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentDidMount:")," \u9996\u6b21\u6e32\u67d3\u540e\u8c03\u7528\uff0c\u6240\u6709\u5f97 Ajax \u8bf7\u6c42\u3001DOM \u6216\u72b6\u6001\u66f4\u65b0\u3001\u8bbe\u7f6e\u4e8b\u4ef6\u76d1\u542c\u5668\u90fd\u5e94\u8be5\u5728\u6b64\u5904\u53d1\u751f\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentWillReceiveProps (nextProps):")," \u5728\u7ec4\u4ef6\u63a5\u6536\u5230\u65b0\u5c5e\u6027\u524d\u8c03\u7528\uff0c\u82e5\u4f60\u9700\u8981\u66f4\u65b0\u72b6\u6001\u54cd\u5e94\u5c5e\u6027\u6539\u53d8\uff08\u4f8b\u5982\uff0c\u91cd\u7f6e\u5b83\uff09\uff0c\u4f60\u53ef\u80fd\u9700\u5bf9\u6bd4",(0,a.kt)("inlineCode",{parentName:"li"},"this.props"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"nextProps"),"\u5e76\u5728\u8be5\u65b9\u6cd5\u4e2d\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"this.setState()"),"\u5904\u7406\u72b6\u6001\u6539\u53d8\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"shouldComponentUpdate(nextProps,nextState):")," \u786e\u5b9a\u7ec4\u4ef6\u662f\u5426\u5e94\u8be5\u66f4\u65b0\u3002 \u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u5b83\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u3002 \u5982\u679c\u4f60\u786e\u5b9a\u5728\u66f4\u65b0\u72b6\u6001\u6216\u5c5e\u6027\u540e\u4e0d\u9700\u8981\u6e32\u67d3\u7ec4\u4ef6\uff0c\u5219\u53ef\u4ee5\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\u503c\u3002 \u5b83\u662f\u4e00\u4e2a\u63d0\u9ad8\u6027\u80fd\u7684\u597d\u5730\u65b9\uff0c\u56e0\u4e3a\u5b83\u5141\u8bb8\u4f60\u5728\u7ec4\u4ef6\u63a5\u6536\u65b0\u5c5e\u6027\u65f6\u963b\u6b62\u91cd\u65b0\u6e32\u67d3\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentWillUpdate (nextProps,nextState):")," \u5f53",(0,a.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate"),"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"true"),"\u540e\u91cd\u65b0\u6e32\u67d3\u7ec4\u4ef6\u4e4b\u524d\u6267\u884c\uff0c\u6ce8\u610f\u4f60\u4e0d\u80fd\u5728\u8fd9\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"li"},"this.setState()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentDidUpdate(prevProps,prevState):")," \u5b83\u4e3b\u8981\u7528\u4e8e\u66f4\u65b0 DOM \u4ee5\u54cd\u5e94 prop \u6216 state \u66f4\u6539\u3002 \u5982\u679c",(0,a.kt)("inlineCode",{parentName:"li"},"shouldComponentUpdate()"),"\u8fd4\u56de",(0,a.kt)("inlineCode",{parentName:"li"},"false"),"\uff0c\u5219\u4e0d\u4f1a\u89e6\u53d1\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"componentWillUnmount:")," \u5f53\u4e00\u4e2a\u7ec4\u4ef6\u88ab\u4ece DOM \u4e2d\u79fb\u9664\u65f6\uff0c\u8be5\u65b9\u6cd5\u88ab\u8c03\u7528\uff0c\u53d6\u6d88\u7f51\u7edc\u8bf7\u6c42\u6216\u8005\u79fb\u9664\u4e0e\u8be5\u7ec4\u4ef6\u76f8\u5173\u7684\u4e8b\u4ef6\u76d1\u542c\u7a0b\u5e8f\u7b49\u5e94\u8be5\u5728\u8fd9\u91cc\u8fdb\u884c\u3002")),(0,a.kt)("h2",{id:"5\u4ec0\u4e48\u662f\u9ad8\u9636\u7ec4\u4ef6hoc"},"5.\u4ec0\u4e48\u662f\u9ad8\u9636\u7ec4\u4ef6\uff08HOC\uff09?"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u9ad8\u9636\u7ec4\u4ef6"),"(",(0,a.kt)("em",{parentName:"p"},"HOC"),") \u5c31\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4e14\u8be5\u51fd\u6570\u63a5\u53d7\u4e00\u4e2a\u7ec4\u4ef6\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\uff0c\u5b83\u53ea\u662f\u4e00\u79cd\u6a21\u5f0f\uff0c\u8fd9\u79cd\u6a21\u5f0f\u662f\u7531",(0,a.kt)("inlineCode",{parentName:"p"},"react"),"\u81ea\u8eab\u7684\u7ec4\u5408\u6027\u8d28\u5fc5\u7136\u4ea7\u751f\u7684\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5c06\u5b83\u4eec\u79f0\u4e3a",(0,a.kt)("strong",{parentName:"p"},"\u7eaf\u7ec4\u4ef6"),"\uff0c\u56e0\u4e3a\u5b83\u4eec\u53ef\u4ee5\u63a5\u53d7\u4efb\u4f55\u52a8\u6001\u63d0\u4f9b\u7684\u5b50\u7ec4\u4ef6\uff0c\u4f46\u5b83\u4eec\u4e0d\u4f1a\u4fee\u6539\u6216\u590d\u5236\u5176\u8f93\u5165\u7ec4\u4ef6\u4e2d\u7684\u4efb\u4f55\u884c\u4e3a\u3002"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"HOC \u6709\u5f88\u591a\u7528\u4f8b\uff1a")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u4ee3\u7801\u590d\u7528\uff0c\u903b\u8f91\u62bd\u8c61\u5316"),(0,a.kt)("li",{parentName:"ol"},"\u6e32\u67d3\u52ab\u6301"),(0,a.kt)("li",{parentName:"ol"},"\u62bd\u8c61\u5316\u548c\u64cd\u4f5c\u72b6\u6001\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"state"),"\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u64cd\u4f5c\u5c5e\u6027\uff08",(0,a.kt)("inlineCode",{parentName:"li"},"props"),"\uff09")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u4f8b\u5b50\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React from 'react';\n\nconst App = (props: {}) => {\n    console.log(props)\n    return <div>test</div>\n}\n\n//\u6241\u5e73\u5316\u7684\u9ad8\u9636\u7ec4\u4ef6\uff08\u63a8\u8350\u4f7f\u7528\uff09\nconst WrappedComponent = (config = {}, Comp: React.ComponentType) => {\n    return (props: any) => {\n        return <Comp {...config} {...props} />\n    }\n}\n\n//\u7b2c\u4e8c\u79cd\u65b9\u5f0f\u7684\u9ad8\u9636\u7ec4\u4ef6\n/* const WrappedComponent = (config = {}) => {\n    return (Comp: any) => {\n      return (props: any) => {\n        return <Comp {...config} {...props} />\n      }\n    }\n  } \n*/\n\nconst Instance = WrappedComponent({ name: 'test' }, App)\n// const Instance = WrappedComponent({name: 'test'})(App)\nexport default Instance\n")),(0,a.kt)("h2",{id:"6\u5982\u4f55\u5b9e\u73b0-server-side-rendering-\u6216-ssr"},"6.\u5982\u4f55\u5b9e\u73b0 Server Side Rendering \u6216 SSR?"),(0,a.kt)("p",null,"React \u5df2\u7ecf\u914d\u5907\u4e86\u7528\u4e8e\u5904\u7406 Node \u670d\u52a1\u5668\u4e0a\u9875\u9762\u6e32\u67d3\u7684\u529f\u80fd\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u7279\u6b8a\u7248\u672c\u7684 DOM \u6e32\u67d3\u5668\uff0c\u5b83\u9075\u5faa\u4e0e\u5ba2\u6237\u7aef\u76f8\u540c\u7684\u6a21\u5f0f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import ReactDOMServer from 'react-dom/server'\n\nimport App from './App'\n\nReactDOMServer.renderToString(<App />)\n")),(0,a.kt)("p",null,"\u6b64\u65b9\u6cd5\u5c06\u4ee5\u5b57\u7b26\u4e32\u5f62\u5f0f\u8f93\u51fa\u5e38\u89c4 HTML\uff0c\u7136\u540e\u5c06\u5176\u4f5c\u4e3a\u670d\u52a1\u5668\u54cd\u5e94\u7684\u4e00\u90e8\u5206\u653e\u5728\u9875\u9762\u6b63\u6587\u4e2d\u3002\u5728\u5ba2\u6237\u7aef\uff0cReact \u68c0\u6d4b\u9884\u6e32\u67d3\u7684\u5185\u5bb9\u5e76\u65e0\u7f1d\u5730\u8854\u63a5\u3002"),(0,a.kt)("h2",{id:"7\u6700\u6d41\u884c\u7684\u52a8\u753b\u8f6f\u4ef6\u5305\u662f\u4ec0\u4e48"},"7.\u6700\u6d41\u884c\u7684\u52a8\u753b\u8f6f\u4ef6\u5305\u662f\u4ec0\u4e48?"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"React Transition Group"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"React Motion"))," \u662fReact\u751f\u6001\u7cfb\u7edf\u4e2d\u6d41\u884c\u7684\u52a8\u753b\u5305\u3002"),(0,a.kt)("h2",{id:"8redux"},"8.redux"),(0,a.kt)("h3",{id:"redux-\u9075\u5faa\u4e09\u4e2a\u57fa\u672c\u539f\u5219"},"Redux \u9075\u5faa\u4e09\u4e2a\u57fa\u672c\u539f\u5219\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u5355\u4e00\u6570\u636e\u6765\u6e90\uff1a")," \u6574\u4e2a\u5e94\u7528\u7a0b\u5e8f\u7684\u72b6\u6001\u5b58\u50a8\u5728\u5355\u4e2a\u5bf9\u8c61\u6811\u4e2d\u3002\u5355\u72b6\u6001\u6811\u53ef\u4ee5\u66f4\u5bb9\u6613\u5730\u8ddf\u8e2a\u968f\u65f6\u95f4\u7684\u53d8\u5316\u5e76\u8c03\u8bd5\u6216\u68c0\u67e5\u5e94\u7528\u7a0b\u5e8f\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u72b6\u6001\u662f\u53ea\u8bfb\u7684\uff1a")," \u6539\u53d8\u72b6\u6001\u7684\u552f\u4e00\u65b9\u6cd5\u662f\u53d1\u51fa\u4e00\u4e2a\u52a8\u4f5c\uff0c\u4e00\u4e2a\u63cf\u8ff0\u53d1\u751f\u7684\u4e8b\u60c5\u7684\u5bf9\u8c61\u3002\u8fd9\u53ef\u4ee5\u786e\u4fdd\u89c6\u56fe\u548c\u7f51\u7edc\u8bf7\u6c42\u90fd\u4e0d\u4f1a\u76f4\u63a5\u5199\u5165\u72b6\u6001\u3002"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u7eaf\u51fd\u6570\u8fdb\u884c\u66f4\u6539\uff1a")," \u8981\u6307\u5b9a\u72b6\u6001\u6811\u5982\u4f55\u901a\u8fc7\u64cd\u4f5c\u8fdb\u884c\u8f6c\u6362\uff0c\u60a8\u53ef\u4ee5\u7f16\u5199reducers\u3002Reducers \u53ea\u662f\u7eaf\u51fd\u6570\uff0c\u5b83\u5c06\u5148\u524d\u7684\u72b6\u6001\u548c\u64cd\u4f5c\u4f5c\u4e3a\u53c2\u6570\uff0c\u5e76\u8fd4\u56de\u4e0b\u4e00\u4e2a\u72b6\u6001\u3002")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u6d41\u7a0b")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u5de5\u4f5c\u6d41\u7a0b"),"\u662f view \u8c03\u7528 store \u7684 dispatch \u63a5\u6536 action \u4f20\u5165 store\uff0creducer \u8fdb\u884c state \u64cd\u4f5c\uff0cview \u901a\u8fc7 store \u63d0\u4f9b\u7684 getState \u83b7\u53d6\u6700\u65b0\u7684\u6570\u636e"),(0,a.kt)("h2",{id:"9\u5e38\u7528hook"},"9.\u5e38\u7528Hook"),(0,a.kt)("h3",{id:"hook\u89c4\u5219"},"Hook\u89c4\u5219"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ea\u80fd\u5728\u51fd\u6570\u6700\u5916\u5c42\u8c03\u7528 Hook\u3002\u4e0d\u8981\u5728\u5faa\u73af\u3001\u6761\u4ef6\u5224\u65ad\u6216\u8005\u5b50\u51fd\u6570\u4e2d\u8c03\u7528")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"\u53ea\u80fd\u5728 React \u7684\u51fd\u6570\u7ec4\u4ef6\u4e2d\u8c03\u7528 Hook\u3002\u4e0d\u8981\u5728\u5176\u4ed6 JavaScript \u51fd\u6570\u4e2d\u8c03\u7528"))),(0,a.kt)("h3",{id:"usestate"},"useState"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, {memo, useState} from "react";\nimport {Button} from "antd";\n\nconst Example = memo(() => {\n\n  const [count, setCount] = useState<number>(0);\n\n  return (\n    <div>\n      <p>\u6570\u91cf\uff1a{count}</p>\n      <Button onClick={() => setCount(count + 1)}>\n        \u70b9\u51fb\n      </Button>\n    </div>\n  );\n})\n\nexport default Example;\n')),(0,a.kt)("h3",{id:"useeffect"},"useEffect"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {memo, useEffect, useState} from \"react\";\nimport {Button} from \"antd\";\n\n/*\n* useEffect\u7b2c\u4e8c\u53c2\u6570\u7684\u60c5\u51b5\uff1a\n*   1.\u5982\u679c\u4e0d\u4f20\u53c2,\u4f1a\u6bcf\u6b21 render \u540e\u90fd\u6267\u884c\u3002\n*   2.\u4f20\u5165\u7684\u662f\u7a7a\u6570\u7ec4\uff0c\u5219\u53ea\u5728\u521d\u59cb\u5316\u6267\u884c\u4e00\u6b21\uff0c\u7b49\u540c\u7c7b\u7ec4\u4ef6componentDidMount\u3002\n*   3.\u4f20\u5165\u6709\u503c\u7684\u6570\u7ec4\uff0c\u4f1a\u6bd4\u8f83\u6bcf\u4e00\u4e2a\u503c\uff0c\u6709\u4e00\u4e2a\u503c\u53d8\u5316\u5c31\u91cd\u65b0\u6267\u884c\u3002\n*   4.\u7531\u4e8e\u7b2c\u4e8c\u53c2\u6570\u91c7\u7528\u6d45\u6bd4\u8f83\u65b9\u5f0f\uff0c\u590d\u6742\u7c7b\u578b\u53c2\u6570\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u3002\n* */\n\nconst Example = memo(() => {\n\n  const [des1, setDes1] = useState<string>('');\n  const [des2, setDes2] = useState<string>('\u6211\u4e0d\u53d8\u6ca1\u673a\u4f1a');\n  const [des3, setDes3] = useState<string>('');\n  const [des4, setDes4] = useState<any[]>([]);\n\n  useEffect(() => {\n    //\u5f53\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e0d\u4f20\uff0c\u6bcf\u6b21 render \u540e\u90fd\u6267\u884c\u3002\n    setDes1('\u6211\u4e0d\u60f3\u4f20\u7b2c\u4e8c\u4e2a\u53c2\u6570')\n    console.log(des1, 'des1')\n  })\n\n  //\u7c7b\u4f3ccomponentDidMount\u548ccomponentDidUpdate\n  useEffect(() => {\n    //\u4f20\u5165\u7684\u662f\u7a7a\u6570\u7ec4\uff0c\u5219\u53ea\u5728\u521d\u59cb\u5316\u6267\u884c\u4e00\u6b21\u3002\n    setDes2('\u6211\u53ea\u6267\u884c\u4e00\u6b21\u554a') \n    console.log(des2, 'des2') //\u6211\u4e0d\u53d8\u6ca1\u673a\u4f1a\n\n    //\u7c7b\u4f3ccomponentWillUnmount\n    return () => {\n      setDes2('')\n      console.log('\u6211\u6e05\u9664\u4e86des2\u7684\u5185\u5bb9', 'des2')\n    }\n  }, [])\n\n  useEffect(() => {\n    //\u4f20\u5165\u6709\u503c\u7684\u6570\u7ec4\uff0c\u4f1a\u6bd4\u8f83\u6bcf\u4e00\u4e2a\u503c\uff0c\u6709\u4e00\u4e2a\u503c\u53d8\u5316\u5c31\u91cd\u65b0\u6267\u884c\u3002\n    setDes3('\u6211\u60f3\u53d8\u4f60\u5c31\u8981\u66f4\u65b0')\n    console.log(des3, 'des3')\n  }, [des3])\n\n  /*useEffect(()=>{\n    //\u7531\u4e8e\u7b2c\u4e8c\u53c2\u6570\u91c7\u7528\u6d45\u6bd4\u8f83\u65b9\u5f0f\uff0c\u590d\u6742\u7c7b\u578b\u53c2\u6570\u4f1a\u5bfc\u81f4\u6b7b\u5faa\u73af\u3002\n    setDes4([1])\n    console.log('\u6b7b\u5faa\u73af\u4e86,\u82ad\u6bd4Q\u4e86',des4)\n  },[des4])*/\n  //\u53ef\u4f7f\u7528 JSON.stringify(), useRef, useMemo \u5c01\u88c5\u540e\u8c03\u7528\u89e3\u51b3\u6b7b\u5faa\u73af\u95ee\u9898\u3002\n  \n  return (\n    <>\n      <Button onClick={() => {\n        setDes3('\u53d8\u4e00\u4e0b')\n      }}>des3</Button>\n      <Button onClick={() => {\n        setDes4([2])\n      }}>des4</Button>\n    </>\n  );\n})\n\nexport default Example;\n")),(0,a.kt)("h3",{id:"useref"},"useRef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import React, {memo, useEffect, useState, useRef} from "react";\nimport {Button} from "antd";\n\n/*\n* \u4f7f\u7528\u573a\u666f:\n* \u53ef\u4ee5\u83b7\u53d6\u7ec4\u4ef6\u7684\u5b9e\u4f8b\u3002\n* \u5229\u7528 useRef \u89e3\u51b3\u7531\u4e8e hooks \u51fd\u6570\u5f0f\u7ec4\u4ef6\u4ea7\u751f\u95ed\u5305\u65f6\u65e0\u6cd5\u83b7\u53d6\u6700\u65b0 state \u7684\u95ee\u9898\u3002\n* \u5b58\u653e\u60f3\u8981\u6301\u4e45\u5316( instant )\u7684\u6570\u636e, \u8be5\u6570\u636e\u4e0d\u548c react \u7ec4\u4ef6\u6811\u7684\u6e32\u67d3\u7ed1\u5b9a\u3002\u8be5\u6570\u636e\u53ef\u4ee5\u662f\u4efb\u4f55\u7c7b\u578b\uff0c\u6570\u5b57\u3001\u6570\u7ec4\u3001\u5bf9\u8c61\u3001\u51fd\u6570\uff0c\u90fd\u53ef\u4ee5\u3002\n*\n* \u7528\u6cd5:\n* \u6bcf\u6b21\u6e32\u67d3useRef\u8fd4\u56de\u503c\u90fd\u4e0d\u53d8\n* \u53d8\u66f4 .current \u5c5e\u6027\u4e0d\u4f1a\u5f15\u53d1\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3;\n* ref.current\u53d1\u751f\u53d8\u5316\u5e94\u8be5\u4f5c\u4e3aSide Effect(\u56e0\u4e3a\u5b83\u4f1a\u5f71\u54cd\u4e0b\u6b21\u6e32\u67d3),\u6240\u4ee5\u4e0d\u5e94\u8be5\u5728render\u9636\u6bb5\u66f4\u65b0current\u5c5e\u6027\n* */\n\n\n//\u5c01\u88c5\u4e00\u4e2a\u83b7\u53d6\u4e0a\u4e00\u6b65\u7684\u503c --\u53ef\u80fd\u5728\u672a\u6765 React \u4f1a\u81ea\u5e26\u4e00\u4e2a usePrevious Hook\u3002\n//useEffect \u662f\u5728\u6bcf\u6b21\u6e32\u67d3\u4e4b\u540e\u624d\u4f1a\u89e6\u53d1\u526f\u4f5c\u7528\u51fd\u6570\u7684\uff0c\u662f\u5ef6\u8fdf\u6267\u884c\u7684\u3002\u800c return \u8bed\u53e5\u662f\u540c\u6b65\u7684\uff0c\u6240\u4ee5 return \u7684\u65f6\u5019\uff0c ref.current \u8fd8\u662f\u65e7\u503c\u3002\nconst usePrevious = <T extends {}>(state: T) => {\n  const ref: React.MutableRefObject<T | null> = useRef<T>(state);\n  useEffect(() => {\n    ref.current = state\n  })\n  return ref.current;\n}\n\nconst Example = memo(() => {\n\n  const inputRef = useRef<HTMLInputElement | null>(null);\n\n  const [count, setCount] = useState<number>(0);\n  const countRef = usePrevious<number>(count);\n  const count2Ref = useRef(count);\n  count2Ref.current = count;\n\n  return (\n    <>\n      <input type="text" ref={inputRef}/>\n      <Button onClick={() => {\n        // \u901a\u8fc7 .current \u62ff\u5230\u5f53\u524d dom \u5143\u7d20\n        // \u53ef\u4f7f\u7528\u539f\u751f dom \u4e8b\u4ef6\n        console.log(inputRef.current, inputRef.current?.value)\n      }}>\u83b7\u53d6inputDom\u8282\u70b9</Button>\n\n      <div>{countRef}_countRef--{count}_count--{count2Ref.current}_count2Ref</div>\n\n      <Button onClick={() => {\n        setCount(count + 1)\n      }}>count\u70b9\u51fb</Button>\n    </>\n  );\n})\n\nexport default Example;\n')),(0,a.kt)("h3",{id:"usememo-usecallback"},"useMemo-useCallback"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import React, {memo, FC, useState, useMemo, useCallback} from \"react\";\nimport {Button} from \"antd\";\n\n/*\n* \u5b50\u7ec4\u4ef6\u6ca1\u6709\u4ece\u7236\u7ec4\u4ef6\u4f20\u5165\u7684props\u6216\u8005\u4f20\u5165\u7684props\u4ec5\u4ec5\u4e3a\u7b80\u5355\u6570\u503c\u7c7b\u578b\u4f7f\u7528memo\u5373\u53ef\u3002\n* \n* */\n\nconst Child: FC<any> = memo(({data, click}) => {\n  console.log('Child')\n  return (\n    <>\n      <div>count:{data}</div>\n      <Button onClick={click}>\u5b50\u7ec4\u4ef6\u70b9\u51fb</Button>\n    </>\n  )\n})\nconst Child2: FC<any> = memo(({data}) => {\n  console.log('Child2')\n  return (\n    <>\n      <p>\u59d3\u540d\uff1a{data.name}</p>\n      <p>\u4f53\u91cd\uff1a{data.weight} kg</p>\n    </>\n  )\n})\n\nconst Example = () => {\n  const [userInfo, setUserInfo] = useState({name: '\u540d\u5b57', weight: 35});\n  const [count, setCount] = useState(0)\n\n  const state = useMemo(() => {\n    return userInfo\n  }, [userInfo, count])\n\n  const click = useCallback(() => {\n    setCount(count + 1)\n  }, [count])\n\n  console.log('parent')\n\n  return (\n    <>\n      <Child data={count} click={click}/>\n      <Child2 data={state}/>\n    </>\n  );\n}\n\nexport default Example;\n")))}d.isMDXComponent=!0},1518:(e,n,t)=>{t.d(n,{Z:()=>r});const r=t.p+"assets/images/react_smzq-9225ff0bcc26b783d51adcd1c10614f6.png"}}]);