// ==UserScript==
// @name             Github 导航栏增强
// @description      为新版 Github 导航栏增加常用链接菜单
// @version          0.2
// @match            *://github.com/*
// @grant            window.onurlchange
// @grant            unsafeWindow
// @namespace        https://github.com/GallenHu/user-scripts
// @homepage         https://github.com/GallenHu
// @author           Gallen
// @icon             data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAACEUExURUxpcRgWFhsYGBgWFhcWFh8WFhoYGBgWFiUlJRcVFRkWFhgVFRgWFhgVFRsWFhgWFigeHhkWFv////////////r6+h4eHv///xcVFfLx8SMhIUNCQpSTk/r6+jY0NCknJ97e3ru7u+fn51BOTsPCwqGgoISDg6empmpoaK2srNDQ0FhXV3eXcCcAAAAXdFJOUwCBIZXMGP70BuRH2Ze/LpIMUunHkpQR34sfygAAAVpJREFUOMt1U+magjAMDAVb5BDU3W25b9T1/d9vaYpQKDs/rF9nSNJkArDA9ezQZ8wPbc8FE6eAiQUsOO1o19JolFibKCdHGHC0IJezOMD5snx/yE+KOYYr42fPSufSZyazqDoseTPw4lGJNOu6LBXVUPBG3lqYAOv/5ZwnNUfUifzBt8gkgfgINmjxOpgqUA147QWNaocLniqq3QsSVbQHNp45N/BAwoYQz9oUJEiE4GMGfoBSMj5gjeWRIMMqleD/CAzUHFqTLyjOA5zjNnwa4UCEZ2YK3khEcBXHjVBtEFeIZ6+NxYbPqWp1DLKV42t6Ujn2ydyiPi9nX0TTNAkVVZ/gozsl6FbrktkwaVvL2TRK0C8Ca7Hck7f5OBT6FFbLATkL2ugV0tm0RLM9fedDvhWstl8Wp9AFDjFX7yOY/lJrv8AkYuz7fuP8dv9izCYH+x3/LBnj9fYPBTpJDNzX+7cAAAAASUVORK5CYII=
// @license          MIT
// @run-at           document-end
// @updateURL        https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/github-nav-enhance.user.js
// @downloadURL      https://fastly.jsdelivr.net/gh/gallenhu/user-scripts@release/github-nav-enhance.user.js
// ==/UserScript==
/* eslint-disable */ /* spell-checker: disable */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports["github-nav-enhance"]=t():e["github-nav-enhance"]=t()}(this,(()=>(()=>{"use strict";var e={};return null===window.onurlchange&&window.addEventListener("urlchange",(function(){const e=document.querySelector('meta[name="user-login"]').getAttribute("content"),t=document.querySelector("nav ul[role='list']");if(t){if("1"===t.getAttribute("data-enhanced"))return;const n=[];n.push(`\n    <li>\n      <a href="https://github.com/${e}?tab=repositories" data-view-component="true" class="AppHeader-context-item">\n        <span class="AppHeader-context-item-label">\n          Your repositories\n        </span>\n      </a>\n    </li>\n    `),n.push(`\n    <li>\n      <a href="https://github.com/${e}?tab=stars" data-view-component="true" class="AppHeader-context-item">\n        <span class="AppHeader-context-item-label">\n          Your stars\n        </span>\n      </a>\n    </li>\n    `),n.push('\n    <li>\n      <a href="https://github.com/settings/organizations" data-view-component="true" class="AppHeader-context-item">\n        <span class="AppHeader-context-item-label">\n          Your organizations\n        </span>\n      </a>\n    </li>\n    '),n.push('\n    <li>\n      <a href="https://gist.github.com/mine" data-view-component="true" class="AppHeader-context-item">\n        <span class="AppHeader-context-item-label">\n          Your gists\n        </span>\n      </a>\n    </li>\n    '),n.push('\n    <li>\n      <a href="javascript:void(0)" data-view-component="true" class="AppHeader-context-item">\n        <span class="AppHeader-context-item-label"></span>\n      </a>\n    </li>\n    '),t.innerHTML+=n.join(""),t.setAttribute("data-enhanced","1")}})),e=e.default})()));