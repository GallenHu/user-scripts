// ==UserScript==
// @name             ElementUI website anchor
// @description      为 ElementUI 文档官网组件页增加内页跳转锚点
// @version          0.1
// @match            https://element.eleme.cn/*
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://element.eleme.cn/favicon.ico
// @license          MIT
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/element-ui-anchor.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/element-ui-anchor.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["element-ui-anchor"]=t():e["element-ui-anchor"]=t()}(this,(()=>(()=>{"use strict";var e={};let t="";return new MutationObserver((function(e,o){const n=window.location.hash.split("#")[1];if(n!==t){const e=document.querySelector("section.element-doc");if(e){const o=e.querySelectorAll("h3"),i=[];Array.from(o).forEach((e=>{const t=e.id,o=e.innerText;i.push(`<li><a href="#${n}#${t}">${o}</a></li>`)}));const r=document.createElement("ul");r.innerHTML=i.join(""),r.setAttribute("style","position: fixed; list-style: none; top: 80px; right: 10px; padding: 10px; max-height: 300px; overflow: auto; background: #fff; border: 1px solid #ddd;"),e.appendChild(r),t=n}}})).observe(document.body,{subtree:!0,childList:!0}),e=e.default})()));