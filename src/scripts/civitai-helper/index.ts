((): void => {
  "use strict";

  // 创建一个 IntersectionObserver 来监视"Show"按钮
  const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        const node = entry.target as HTMLButtonElement;
        node.click();
        observer.unobserve(node);
      }
    }
  });

  // 初始化函数：查找并监视所有"Show"按钮
  const init = (): void => {
    const buttons = document.querySelectorAll<HTMLButtonElement>(
      ".mantine-Stack-root > button.mantine-UnstyledButton-root.mantine-Button-root"
    );

    buttons.forEach(node => {
      if (node.innerText === "Show") {
        observer.observe(node);
      }
    });
  };

  // 监视DOM变化
  const main = document.querySelector("#main");
  if (main) {
    new MutationObserver(() => init()).observe(main, {
      childList: true,
      subtree: true,
    });
  }

  // 初始运行
  init();
})();
