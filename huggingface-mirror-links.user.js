// ==UserScript==
// @name             Hugging Face Mirror Links
// @description      Add navigation buttons to Hugging Face project pages for quick access to mirror sites
// @version          0.1
// @match            https://huggingface.co/*
// @grant            none
// @namespace        http://tampermonkey.net/
// @homepage         https://github.com/GallenHu
// @author           gallenhu
// @icon             https://www.tampermonkey.net/images/icon180.png
// @license          MIT
// @run-at           document-end
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/huggingface-mirror-links.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/huggingface-mirror-links.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["huggingface-mirror-links"]=t():e["huggingface-mirror-links"]=t()}(this,(()=>(()=>{"use strict";var e={};function t(e,t){const o=document.createElement("a");return o.href=t,o.textContent=e,o.target="_blank",o.style.marginLeft="10px",o.style.padding="5px 10px",o.style.backgroundColor="#4CAF50",o.style.color="white",o.style.textDecoration="none",o.style.borderRadius="4px",o.style.fontSize="14px",o}return function(){const e=window.location.pathname,o=`https://hf-mirror.com${e}`,n=`https://www.modelscope.cn${e}`,r=document.querySelector("h1");if(r){const e=t("HF Mirror",o),i=t("ModelScope",n);r.appendChild(e),r.appendChild(i)}}(),e=e.default})()));