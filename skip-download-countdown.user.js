// ==UserScript==
// @name             跳过下载倒计时
// @description      跳过下载前的倒计时.支持:讯牛
// @version          0.1
// @match            *://www.xunniufile.com/*
// @match            *://www.xunniupan.co/*
// @grant            GM_registerMenuCommand
// @grant            unsafeWindow
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://www.baidu.com/favicon.ico
// @license          MIT
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/skip-download-countdown.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/skip-download-countdown.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["skip-download-countdown"]=o():e["skip-download-countdown"]=o()}(this,(()=>(()=>{"use strict";var e={};return GM_registerMenuCommand("跳过倒计时",(()=>{setTimeout((()=>{for(var e=unsafeWindow.setTimeout(";"),o=0;o<e;o++)unsafeWindow.clearTimeout(o);unsafeWindow.down_file_link()}),2e3)})),e=e.default})()));