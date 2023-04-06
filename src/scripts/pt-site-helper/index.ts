import UrlUtils from "../../utils/url.utils";
import RequestUtils from "../../utils/request.utils";

const host = UrlUtils.host;
const origin = UrlUtils.origin;

const domBody = document.querySelector("body") as HTMLElement;
const isListPage = domBody.innerText.indexOf("下一页") > -1 || domBody.innerText.indexOf("下一頁") > -1;
const isDetailPage = UrlUtils.location.pathname.indexOf("detail") > -1;

const isSite_pter = host.indexOf("pter") > -1;

function regMenus() {
  function reloadTip() {
    GM_notification({
      text: "请刷新页面",
      title: "提示",
      onclick: () => window.location.reload(),
    });
  }

  GM_registerMenuCommand("启用高亮Free", () => {
    GM_setValue("highlightFreePosts", 1);
    highlightFreePosts();
  });
  GM_registerMenuCommand("禁用高亮Free", () => {
    GM_setValue("highlightFreePosts", 0);
    reloadTip();
  });
  GM_registerMenuCommand("启用缩略图放大", () => {
    GM_setValue("enlargeThumbnail", 1);
    enlargeThumbnail();
  });
  GM_registerMenuCommand("禁用缩略图放大", () => {
    GM_setValue("enlargeThumbnail", 0);
    reloadTip();
  });
  GM_registerMenuCommand("启用新标签页打开", () => {
    GM_setValue("openInNewTab", 1);
    openInNewTab();
  });
  GM_registerMenuCommand("禁用新标签页打开", () => {
    GM_setValue("openInNewTab", 0);
    reloadTip();
  });
}

function checkIn() {
  var $qiandao1 = $("#nav_block a.faqlink");
  var $qiandao2 = $('#outer a[href="index.php?action=addbonus"]');
  var $qiandao3 = $("#sign_in a");
  if ($qiandao1?.length) {
    RequestUtils.get($qiandao1.attr("href")!, () => {
      $qiandao1!.remove();
    });
  }
  if ($qiandao2) {
    RequestUtils.get($qiandao2.attr("href")!, () => {
      $qiandao2!.remove();
    });
  }
  if ($qiandao3) {
    $qiandao3.click();
  }
}

function highlightFreePosts() {
  const enable = GM_getValue("highlightFreePosts");
  console.log("highlightFreePosts", enable);

  if (enable) {
    var $free = $(".pro_free");
    var $free2 = $(".pro_free2up");

    var background = "background: rgb(255, 222, 144, 1) !important";
    $.each($free, (_: number, item: any) => {
      if (isSite_pter) {
        $(item).parent().parent().attr("style", background);
      } else {
        $(item).parent().attr("style", background);
      }
    });
    $.each($free2, (_: number, item: any) => {
      $(item).parent().attr("style", background);
    });
  }
}

function easyCopyLink() {
  function copy1() {
    var $link = $("a:contains('[IPv4+https]')");
    var ahref = $link.attr("href");
    var urlTxt = ahref.indexOf("http") === 0 ? ahref : origin + ahref;
    var $td = $link.parent().parent();
    $td.prepend(
      [
        "<span>IPv4+https：</span>",
        '<input class="my-downloadurl" value="' + urlTxt + '" style="width:700px">',
        "<br><br>",
      ].join("")
    );

    $link = $("a:contains('[IPv4]')");
    ahref = $link.attr("href");
    urlTxt = origin + ahref;
    $td = $link.parent().parent();
    $td.prepend(
      [
        "<span>IPv4：</span>",
        '<input class="my-downloadurl" value="' + urlTxt + '" style="width:700px">',
        "<br><br>",
      ].join("")
    );
    $("body").on("click", ".my-downloadurl", function () {
      // @ts-ignore
      const thisAny = this as any;
      const $ipt = $(thisAny);
      const ipt = $ipt[0];
      ipt.select();

      GM_setClipboard($ipt.val(), "text");
      GM_notification({
        text: "链接已复制",
        title: "提示",
        timeout: 1500,
      });
    });
  }

  function copy2() {
    var $link = $("a:contains('[下载地址]')");
    var ahref = $link.attr("href");
    var urlTxt = ahref.indexOf("http") === 0 ? ahref : origin + ahref;
    var $td = $link.parent();
    $td.prepend(['<input id="downloadurl" value="' + urlTxt + '" style="width:700px">', "<br><br>"].join(""));

    $("body").on("click", "#downloadurl", function () {
      // @ts-ignore
      const thisAny = this as any;
      const $ipt = $(thisAny);
      const ipt = $ipt[0];
      ipt.select();

      GM_setClipboard($ipt.val(), "text");
      GM_notification({
        text: "链接已复制",
        title: "提示",
        timeout: 1500,
      });
    });
  }

  // pter
  function copy3() {
    var $check = $("td:contains('种子链接')");
    var $td = $check.next();
    var ahref = $td.find("a").attr("href");
    var urlTxt = ahref.indexOf("http") === 0 ? ahref : origin + '/' + ahref;
    $td.prepend(['<input id="downloadurl" value="' + urlTxt + '" style="width:700px">', "<br><br>"].join(""));

    $("body").on("click", "#downloadurl", function () {
      // @ts-ignore
      const thisAny = this as any;
      const $ipt = $(thisAny);
      const ipt = $ipt[0];
      ipt.select();

      GM_setClipboard($ipt.val(), "text");
      GM_notification({
        text: "链接已复制",
        title: "提示",
        timeout: 1500,
      });
    });
  }

  function copy4() {
    var $link = $("a:contains('[HTTP]')");
    var ahref = $link.attr("href");
    var urlTxt = ahref.indexOf("http") === 0 ? ahref : origin + ahref;
    var $td = $link.parent();
    $td.prepend(
      [
        "<span>HTTP：</span>",
        '<input class="my-downloadurl" value="' + urlTxt + '" style="width:700px">',
        "<br><br>",
      ].join("")
    );

    $link = $("a:contains('[HTTPS]')");
    ahref = $link.attr("href");
    urlTxt = origin + ahref;
    $td = $link.parent();
    $td.prepend(
      [
        "<span>HTTPS：</span>",
        '<input class="my-downloadurl" value="' + urlTxt + '" style="width:700px">',
        "<br><br>",
      ].join("")
    );

    $("body").on("click", ".my-downloadurl", function () {
      // @ts-ignore
      const thisAny = this as any;
      const $ipt = $(thisAny);
      const ipt = $ipt[0];
      ipt.select();

      GM_setClipboard($ipt.val(), "text");
      GM_notification({
        text: "链接已复制",
        title: "提示",
        timeout: 1500,
      });
    });
  }

  if ($("a:contains('[IPv4+https]')")?.length) {
    // m-team
    copy1();
    return;
  }
  if ($("a:contains('[HTTP]')")?.length) {
    // lemonhd
    copy4();
    return;
  }

  if ($("a:contains('[下载地址]')")?.length) {
    // ourbits
    copy2();
    return;
  }
  if ($("td:contains('种子链接')")?.length) {
    // pter
    copy3();
    return;
  }
}

function enlargeThumbnail() {
  const enable = GM_getValue("enlargeThumbnail");
  console.log("enlargeThumbnail", enable);

  if (enable) {
    function setSize(size: string) {
      $("td.torrentimg img").css({
        maxWidth: "none",
        height: size,
      });
    }

    setSize("280px");
  }
}

function openInNewTab() {
  const enable = GM_getValue("openInNewTab");

  console.log("openInNewTab:", enable);
  if (enable) {
    $("table.torrentname a[href*='detail']").attr("target", "_blank");
  }
}

// ============================================================
// 仅执行一次
regMenus();

setTimeout(() => {
  if (isListPage) {
    highlightFreePosts();
    enlargeThumbnail();
    openInNewTab();
  }

  if (isDetailPage) {
    easyCopyLink();
  }

  checkIn();
}, 1000);

// ============================================================

// 监听到URL变化执行（初次访问不会执行，页面跳转不会执行）
if ((window as any).onurlchange === null) {
  window.addEventListener("urlchange", () => {
    // 备用
  });
}
