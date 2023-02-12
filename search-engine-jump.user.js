// ==UserScript==
// @name             搜索引擎相互跳转
// @description      谷歌、百度相互跳转
// @version          0.1
// @match            *://www.google.com/search*
// @match            *://www.baidu.com/s*
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             data:image/png;base64,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
// @license          MIT
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/search-engine-jump.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/search-engine-jump.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["search-engine-jump"]=e():t["search-engine-jump"]=e()}(this,(()=>(()=>{"use strict";var t={};const e=new class{constructor(){this.location={},this.host="",this.origin="",this.location=window.location,this.host=this.location.host,this.origin=this.location.origin}isDomain(t){return this.host.endsWith(t)}};return e.host.endsWith("google.com")?function(){var t,e;const o=document.querySelector("input.gLFyf");null===(t=document.querySelector(".A8SBwf"))||void 0===t||t.insertAdjacentHTML("beforeend",'<button style="position: absolute; right: -120px; top: 5px; background: #fff; text-align: center; width: 100px; height: 38px; border: 1px solid transparent; box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%); color: #1a73e8; border-radius: 24px;cursor:pointer;" id="btnCustomSearch" type="button">百度一下</button>'),null===(e=document.querySelector("#btnCustomSearch"))||void 0===e||e.addEventListener("click",(()=>{window.open(`https://www.baidu.com/s?wd=${o.value}`)}))}():e.host.endsWith("baidu.com")&&function(){var t,e;const o=document.querySelector("#kw");null===(t=document.querySelector("#form"))||void 0===t||t.insertAdjacentHTML("beforeend",'<span class="bg s_btn_wr"><input id="btnCustomSearch" type="button" value="Google" style="cursor: pointer; width: 112px; height: 40px; line-height: 41px; line-height: 40px9; background-color: #4e6ef2; border-radius: 10px; font-size: 17px; box-shadow: none; font-weight: 400; border: 0; outline: 0; letter-spacing: normal; color: #fff; text-align: center;margin-left:10px"></span>'),null===(e=document.querySelector("#btnCustomSearch"))||void 0===e||e.addEventListener("click",(()=>{window.open(`https://www.google.com/search?q=${o.value}`)}))}(),t=t.default})()));