import UrlUtils from "../../utils/url.utils";

function modifyGoogle() {
  const $ipt = document.querySelector("input.gLFyf") as HTMLInputElement;
  const btns = [
    { text: "百度一下", class: "g-baidu", link: "https://www.baidu.com/s?wd=" },
    { text: "必应搜索", class: "g-bing", link: "https://www.bing.com/search?q=" },
  ];

  btns.forEach((btn, index) => {
    const styleText = `position: absolute; right: ${
      -120 * (index + 1)
    }px; top: 0; background: #fff; text-align: center; width: 100px; height: 38px; border: 1px solid transparent; box-shadow: 0 2px 5px 1px rgb(64 60 67 / 16%); color: #1a73e8; border-radius: 24px;cursor:pointer;`;

    const btnSearch = `<button style="${styleText}" class="${btn.class}" type="button">${btn.text}</button>`;

    document.querySelector(".A8SBwf")?.insertAdjacentHTML("beforeend", btnSearch);
  });

  document.querySelector(".tsf")?.addEventListener("click", (e: Event) => {
    const target = Array.from((e.target as HTMLElement).classList);
    const findBtn = btns.find(item => target.includes(item.class));

    if (findBtn) {
      window.open(findBtn.link + $ipt.value);
    }
  });
}

function modifyBaidu() {
  const $ipt = document.querySelector("#kw") as HTMLInputElement;
  const btns = [
    { text: "Google", class: "g-google", link: "https://www.google.com/search?q=" },
    { text: "必应搜索", class: "g-bing", link: "https://www.bing.com/search?q=" },
  ];

  const styleText =
    "cursor: pointer; width: 112px; height: 40px; line-height: 41px; line-height: 40px9; background-color: #4e6ef2; border-radius: 10px; font-size: 17px; box-shadow: none; font-weight: 400; border: 0; outline: 0; letter-spacing: normal; color: #fff; text-align: center;";

  btns.forEach(btn => {
    const btnSearch = `<span style="margin-left:10px" class="bg s_btn_wr"><input class="${btn.class}" type="button" value="${btn.text}" style="${styleText}"></span>`;

    document.querySelector("#form")?.insertAdjacentHTML("beforeend", btnSearch);
  });

  document.querySelector(".head_wrapper #form")?.addEventListener("click", e => {
    const target = Array.from((e.target as HTMLElement).classList);
    const findBtn = btns.find(item => target.includes(item.class));

    if (findBtn) {
      window.open(findBtn.link + $ipt.value);
    }
  });
}

if (UrlUtils.host.endsWith("google.com")) {
  modifyGoogle();
} else if (UrlUtils.host.endsWith("baidu.com")) {
  modifyBaidu();
}
