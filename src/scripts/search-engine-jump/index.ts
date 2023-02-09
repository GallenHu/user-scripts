import UrlUtils from "../../utils/url.utils";

function modifyGoogle() {
  const $ipt = document.querySelector("input.gLFyf") as HTMLInputElement;
  const styleText =
    "position: absolute; right: -120px; top: 5px; background: #fff; text-align: center; width: 100px; height: 38px; border: 1px solid transparent; box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%); color: #1a73e8; border-radius: 24px;cursor:pointer;";
  const btnSearch = `<button style="${styleText}" id="btnCustomSearch" type="button">百度一下</button>`;

  document.querySelector(".A8SBwf")?.insertAdjacentHTML("beforeend", btnSearch);
  document.querySelector("#btnCustomSearch")?.addEventListener("click", () => {
    window.open(`https://www.baidu.com/s?wd=${$ipt.value}`);
  });
}

function modifyBaidu() {
  const $ipt = document.querySelector("#kw") as HTMLInputElement;
  const styleText =
    "cursor: pointer; width: 112px; height: 40px; line-height: 41px; line-height: 40px9; background-color: #4e6ef2; border-radius: 10px; font-size: 17px; box-shadow: none; font-weight: 400; border: 0; outline: 0; letter-spacing: normal; color: #fff; text-align: center;margin-left:10px";
  const btnSearch = `<span class="bg s_btn_wr"><input id="btnCustomSearch" type="button" value="Google" style="${styleText}"></span>`;
  document.querySelector("#form")?.insertAdjacentHTML("beforeend", btnSearch);

  document.querySelector("#btnCustomSearch")?.addEventListener("click", () => {
    window.open(`https://www.google.com/search?q=${$ipt.value}`);
  });
}

if (UrlUtils.host.endsWith("google.com")) {
  modifyGoogle();
} else if (UrlUtils.host.endsWith("baidu.com")) {
  modifyBaidu();
}
