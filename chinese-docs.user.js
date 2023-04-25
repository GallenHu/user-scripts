// ==UserScript==
// @name             查看中文文档
// @description      为常见的开发者官方文档增加中文文档跳转链接
// @version          0.1
// @match            *://rxjs.dev/*
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://rxjs.tech/assets/images/favicons/favicon.ico
// @license          MIT
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/chinese-docs.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/chinese-docs.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["chinese-docs"]=t():e["chinese-docs"]=t()}(this,(()=>(()=>{"use strict";var e={};return function(){const e=document.querySelector("aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-top-menu > ul"),{pathname:t}=window.location,o=`<li class="ng-star-inserted"><a class="nav-link" href="https://rxjs.tech${t}" title="中文版">中文版</a></li>`;null==e||e.insertAdjacentHTML("beforeend",o)}(),e=e.default})()));