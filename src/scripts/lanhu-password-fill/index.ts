import urlUtils from "../../utils/url.utils";

const PWD_MAP = new Map([["2108cbc4-ab70-4a5d-9d77-9b507776996c", "9fwa"]]);

const pid = urlUtils.getQueryFromHash("pid") || "";

const pwd = PWD_MAP.get(pid) || "";

console.log("pid: ", pid);
console.log("pwd: ", pwd);

setTimeout(() => {
  (document.querySelector(".pass input") as HTMLInputElement).value = pwd;
}, 500);
