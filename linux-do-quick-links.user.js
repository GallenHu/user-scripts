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

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["linux-do-quick-links"] = factory();
	else
		root["linux-do-quick-links"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

function addHeaderButtons() {
    const $wrap = document.querySelector("ul.icons.d-header-icons");
    if ($wrap) {
        console.log("$wrap found");
        const $li = document.createElement("li");
        $li.className = "search-dropdown header-dropdown-toggle";
        const $a = document.createElement("a");
        $a.className = "btn no-text btn-icon icon btn-flat";
        $a.href = "https://linux.do/u/gallen/activity/likes-given";
        $a.title = "我的点赞";
        $a.setAttribute("type", "button");
        jQuery($a).append('<svg class="fa d-icon d-icon-heart svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#heart"></use></svg>');
        $li.appendChild($a);
        jQuery($wrap).prepend($li);
    }
    else {
        console.error("$wrap not found");
    }
}
window.addEventListener("load", () => {
    addHeaderButtons();
});

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});