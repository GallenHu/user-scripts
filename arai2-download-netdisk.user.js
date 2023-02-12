// ==UserScript==
// @name             Aria2下载网盘链接
// @description      开通VIP后Aria2下载网盘.支持:讯牛
// @version          0.1
// @match            *://www.xunniufile.com/file*
// @match            *://www.xunniupan.co/file*
// @grant            GM_getResourceText
// @grant            GM_addStyle
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             https://www.baidu.com/favicon.ico
// @license          MIT
// @require          https://cdn.staticfile.org/jquery/1.12.2/jquery.min.js
// @require          https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js
// @resource         IMPORTED_CSS https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/arai2-download-netdisk.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/arai2-download-netdisk.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o():"function"==typeof define&&define.amd?define([],o):"object"==typeof exports?exports["arai2-download-netdisk"]=o():e["arai2-download-netdisk"]=o()}(this,(()=>(()=>{"use strict";var e={};const o=new class{downloadByMotrix(e,o){const t={jsonrpc:"2.0",method:"aria2.addUri",id:Number(Date.now().toString().slice(-4)),params:[[e],{split:"64","max-connection-per-server":"5","seed-ratio":"0",referer:o||""}]};return fetch(e,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)})}},t=GM_getResourceText("IMPORTED_CSS");GM_addStyle(t);const a=jQuery(".page-header .pull-right");return a.append('<div class="aaa-down d-1" style="padding: 10px 0;cursor: pointer">下载1</div><div class="aaa-down d-2" style="padding: 10px 0;cursor: pointer">下载2</div><div class="aaa-down d-3" style="padding: 10px 0;cursor: pointer">下载3</div><div class="aaa-down d-4" style="padding: 10px 0;cursor: pointer">下载4</div><div class="aaa-down d-5" style="padding: 10px 0;cursor: pointer">下载5</div>'),a.on("click",".aaa-down",(function(){let e=jQuery(this).attr("class").replace("aaa-down d-","vip_btn");"vip_btn1"===e&&(e="vip_btn");const t=jQuery("#"+e).attr("href");console.log("get url:",t);const a=window.location.href;t&&o.downloadByMotrix(t,a).then((e=>e.json())).then((e=>{console.log(e),$("任务添加成功").modal()}))})),e=e.default})()));