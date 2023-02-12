import aria2Utils from "../../utils/aria2.utils";

const my_css = GM_getResourceText("IMPORTED_CSS");
GM_addStyle(my_css);

// Start
const d = `<div class="aaa-down d-1" style="padding: 10px 0;cursor: pointer">下载1</div><div class="aaa-down d-2" style="padding: 10px 0;cursor: pointer">下载2</div><div class="aaa-down d-3" style="padding: 10px 0;cursor: pointer">下载3</div><div class="aaa-down d-4" style="padding: 10px 0;cursor: pointer">下载4</div><div class="aaa-down d-5" style="padding: 10px 0;cursor: pointer">下载5</div>`;
const $section = jQuery(".page-header .pull-right");
$section.append(d);
$section.on("click", ".aaa-down", function () {
  // @ts-ignore
  const thisAny = this as any;

  let t = jQuery(thisAny).attr("class").replace("aaa-down d-", "vip_btn");
  if (t === "vip_btn1") t = "vip_btn";

  const url = jQuery("#" + t).attr("href");
  console.log("get url:", url);

  const referer = window.location.href;
  if (url) {
    aria2Utils
      .downloadByMotrix(url, referer)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        $("任务添加成功").modal();
      });
  }
});
