// ==UserScript==
// @name             Alist 生成 M3U
// @description      在 Alist 文件列表页生成 M3U 播放列表，可在支持的播放器（如 Kodi）中使用
// @version          0.1
// @match            *://*/*
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://alist.nn.ci/logo.svg
// @license          MIT
// @require          https://cdn.bootcdn.net/ajax/libs/FileSaver.js/2.0.5/FileSaver.min.js
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/alist-to-m3u.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/alist-to-m3u.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["alist-to-m3u"]=t():e["alist-to-m3u"]=t()}(this,(()=>(()=>{"use strict";var e={};function t(){const e=document.querySelectorAll(".list a.list-item"),t=[];e.forEach((e=>{var o;let n=e.href;const i=(null===(o=window.ALIST)||void 0===o?void 0:o.base_path)||"/",r=window.location.origin+i;n=n.replace(r,r+"d/");const l=e.querySelector(".name"),u=l?l.innerText:"";t.push({href:n,name:u})}));const o=function(e){const t=["#EXTM3U"];return(null==e?void 0:e.length)&&e.forEach((e=>{t.push(`#EXTINF:-1,${e.name}`),t.push(e.href)})),t.join("\n")}(t),n=new Blob([o],{type:"text/plain;charset=utf-8"});window.saveAs(n,"playlist.m3u")}let o=()=>{document.querySelectorAll(".list a.list-item").length&&(!function(){const e=document.querySelector("body"),o=document.createElement("button");o.id="downloadM3U",o.classList.add("hope-button"),o.innerText="生成M3U",o.setAttribute("style","cursor:pointer;position:fixed;top:10px;left:10px;font-size:14px;padding: 4px 8px;border: 1px solid #96c7f2;background:#fff;"),null==e||e.appendChild(o),o.addEventListener("click",t)}(),o=()=>null)};return function(){if(!(((null===(e=document.querySelector('meta[name="generator"]'))||void 0===e?void 0:e.getAttribute("content"))||"").toLowerCase().indexOf("alist")>-1))return!1;var e;const t=document.querySelector("#root");if(t){new MutationObserver(o).observe(t,{childList:!0,subtree:!0})}}(),e=e.default})()));