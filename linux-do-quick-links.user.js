// ==UserScript==
// @name             Linux.do 快捷链接
// @description      为 Linux.do 增加常用的快捷链接
// @version          0.1
// @match            *://linux.do/*
// @grant            window.onurlchange
// @grant            unsafeWindow
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://linux.do/uploads/default/optimized/3X/9/d/9dd49731091ce8656e94433a26a3ef36062b3994_2_32x32.png
// @license          MIT
// @run-at           document-end
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/linux-do-quick-links.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/linux-do-quick-links.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["linux-do-quick-links"]=t():e["linux-do-quick-links"]=t()}(this,(()=>(()=>{"use strict";var e={};return window.addEventListener("load",(()=>{!function(){const e=document.querySelector("ul.icons.d-header-icons");if(e){console.log("$wrap found");const t=document.createElement("li");t.className="search-dropdown header-dropdown-toggle";const n=document.createElement("a");n.className="btn no-text btn-icon icon btn-flat",n.href="https://linux.do/u/gallen/activity/likes-given",n.title="我的点赞",n.setAttribute("type","button"),jQuery(n).append('<svg class="fa d-icon d-icon-heart svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#heart"></use></svg>'),t.appendChild(n),jQuery(e).prepend(t)}else console.error("$wrap not found")}()})),e=e.default})()));