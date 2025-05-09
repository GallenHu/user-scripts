// ==UserScript==
// @name             Civitai 小助手
// @description      转载自 maomao1996 的脚本；提升 Civitai 使用体验的小助手；自动移除分级遮罩直接展示图片
// @version          0.1
// @match            *://civitai.com/*
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://greasyfork.org/zh-CN/scripts/494949-civitai-%E5%B0%8F%E5%8A%A9%E6%89%8B
// @author           maomao1996
// @icon             https://civitai.com/favicon-blue.ico
// @license          MIT
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/civitai-helper.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/civitai-helper.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["civitai-helper"]=t():e["civitai-helper"]=t()}(this,(()=>(()=>{"use strict";var e={};return(()=>{const e=new IntersectionObserver((t=>{for(const o of t)if(o.isIntersecting){const t=o.target;t.click(),e.unobserve(t)}})),t=()=>{document.querySelectorAll(".mantine-Stack-root > button.mantine-UnstyledButton-root.mantine-Button-root").forEach((t=>{"Show"===t.innerText&&e.observe(t)}))},o=document.querySelector("#main");o&&new MutationObserver((()=>t())).observe(o,{childList:!0,subtree:!0}),t()})(),e=e.default})()));