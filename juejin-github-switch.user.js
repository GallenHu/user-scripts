// ==UserScript==
// @name             e.juejin.cn快速切换GitHub语言
// @description      为e.juejin.cn增加常用的语言切换按钮
// @version          0.1
// @match            *://e.juejin.cn/*
// @grant            window.onurlchange
// @grant            unsafeWindow
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/favicons/favicon.ico
// @license          MIT
// @run-at           document-end
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/juejin-github-switch.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/juejin-github-switch.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["juejin-github-switch"]=t():e["juejin-github-switch"]=t()}(this,(()=>(()=>{"use strict";var e={};function t(){const e=document.querySelector(".github-source .source-navbar"),t=document.querySelector(".github-source .category-selector"),o="quick-switch-lang";e&&t&&(["TypeScript","Python","Java","Go"].forEach((r=>{const c=document.createElement("div");c.className=o,c.setAttribute("style","margin-right:20px;cursor:pointer"),c.innerText=r,e.insertBefore(c,t)})),document.querySelectorAll("."+o).forEach((e=>{e.addEventListener("click",(e=>{!function(e){const t=document.querySelector("#app > div.layout.source-layout.utility > div.main-area > div.source.github-source.other-source.github > div.source-navbar > div.lang-selector > div.curr");null==t||t.click(),Array.from(document.querySelectorAll(".lang-list li")).some((t=>{if(t.innerText.toLowerCase()===e.toLowerCase())return t.click(),!0}))}(e.target.innerText)}))})))}return setTimeout((()=>{t()}),100),e=e.default})()));