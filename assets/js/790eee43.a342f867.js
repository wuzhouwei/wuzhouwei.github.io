/*! For license information please see 790eee43.a342f867.js.LICENSE.txt */
(self.webpackChunkmy_docs=self.webpackChunkmy_docs||[]).push([[621],{8721:(t,e,r)=>{"use strict";r.r(e),r.d(e,{default:()=>c});var a=r(7294),n=r(1207),o=r(3967),i=r.n(o);const l=["\u52c7\u5f80\u76f4\u524d","\u8fce\u96be\u800c\u4e0a","\u594b\u53d1\u56fe\u5f3a","\u52a0\u6cb9\u26fd\ufe0f"];function c(){const[t,e]=(0,a.useState)([]),[r,o]=(0,a.useState)(!1),c=i()(n.Z.box,n.Z.bubbleWrap),b=i()(n.Z.bubbleBtn,r?n.Z.bubbleBtnAnimate:"");return console.log(t),a.createElement("section",{className:c},a.createElement("div",{onClick:()=>{o(!0),setTimeout((()=>o(!1)),100);const t=200*Math.random()-100,r=200*Math.random()+100,a=360*Math.random(),n=l[Math.floor(Math.random()*l.length)],i=function(){let t="#";for(let e=0;e<6;e++)t+="0123456789ABCDEF"[Math.floor(16*Math.random())];return t}(),c={id:Date.now(),randomX:t,randomY:r,randomRotation:a,randomElement:n,randomColor:i};e((t=>[...t,c]))},className:b},a.createElement("span",null,"\u5feb\u901f\u70b9\u51fb ",a.createElement("br",null),"\u7ed9\u81ea\u5df1\u6253\u6c14")),a.createElement("div",null,t.map((t=>a.createElement("div",{key:t.id,className:n.Z.bubble,style:{animationDelay:(t.animationStartTime-Date.now())/1e3+"s",transform:`rotate(${t.randomRotation}deg)`,left:`calc(50% + ${t.randomX}px)`,bottom:`${t.randomY}px`,backgroundColor:`${t.randomColor}`},onAnimationEnd:()=>{return r=t.id,void e((t=>t.filter((t=>t.id!==r))));var r}},t.randomElement)))))}},1207:(t,e,r)=>{"use strict";r.d(e,{Z:()=>a});const a={container:"container_bfhl",wrap:"wrap_T5Hr",basic:"basic_cNlR",infoWrap:"infoWrap_kDVb",picWrap:"picWrap_RFLO",headPortrait:"headPortrait_Yi1d",box:"box_D8X3",blockTitle:"blockTitle_B3bv",position:"position_VPWo",media:"media_JSTP",hobbyWrap:"hobbyWrap_mf7O",hobby:"hobby_yQ1p",skillWrap:"skillWrap_VhZ7",skill:"skill_Ry5N",title:"title_GqtP",introduce:"introduce_ZN_t",ran:"ran_ZSGC",contentWrap:"contentWrap_YZUk",cardWrap:"cardWrap_zJ_b",cardInfo:"cardInfo_UQ7C",cardIcon:"cardIcon_I6MN",card:"card_M5pr",cardTitle:"cardTitle_tke3",cardVal:"cardVal_Foan",font:"font_hpBv",exert:"exert_z9AD",articleWrap:"articleWrap_GanA",articleBox:"articleBox_ip5B",arrow:"arrow_Ktde",repeatedly:"repeatedly_fK83",text:"text_ScsT",bounce:"bounce_xHGm",bouncingHobby:"bouncingHobby_LGGG",bubbleWrap:"bubbleWrap_tyqU",bubbleBtn:"bubbleBtn_FvlZ",bubbleBtnAnimate:"bubbleBtnAnimate_U2cI",bubble:"bubble_fOFi",bubbleAnimation:"bubbleAnimation_NYZb",rotate:"rotate_Gtw6",opacityChange:"opacityChange_LtPO",colorChange:"colorChange_Iwtl"}},3967:(t,e)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var r=arguments[e];r&&(t=i(t,o(r)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var r in t)a.call(t,r)&&t[r]&&(e=i(e,r));return e}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(n.default=n,t.exports=n):void 0===(r=function(){return n}.apply(e,[]))||(t.exports=r)}()}}]);