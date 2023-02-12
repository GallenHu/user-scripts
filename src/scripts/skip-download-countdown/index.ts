GM_registerMenuCommand("跳过倒计时", () => {
  setTimeout(() => {
    // hack: 清除所有的 settimeout
    var highestTimeoutId = unsafeWindow.setTimeout(";");
    for (var i = 0; i < highestTimeoutId; i++) {
      unsafeWindow.clearTimeout(i);
    }

    unsafeWindow.down_file_link();
  }, 2000);
});
