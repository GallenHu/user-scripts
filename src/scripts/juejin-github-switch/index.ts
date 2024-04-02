function addButtons() {
  const $wrap = document.querySelector(".github-source .source-navbar");
  const $category = document.querySelector(".github-source .category-selector");
  const className = "quick-switch-lang";
  if ($wrap && $category) {
    ["TypeScript", "Python", "Java", "Go"].forEach(lang => {
      const b = document.createElement("div");
      b.className = className;
      b.setAttribute("style", "margin-right:20px;cursor:pointer");
      b.innerText = lang;

      $wrap.insertBefore(b, $category);
    });

    document.querySelectorAll("." + className).forEach(el => {
      el.addEventListener("click", e => {
        switchLang((e.target as HTMLElement).innerText);
      });
    });
  }

  function switchLang(lang: string) {
    const $dropdown = document.querySelector(
      "#app > div.layout.source-layout.utility > div.main-area > div.source.github-source.other-source.github > div.source-navbar > div.lang-selector > div.curr"
    );
    ($dropdown as any)?.click();

    Array.from(document.querySelectorAll(".lang-list li")).some((li: any) => {
      if (li.innerText.toLowerCase() === lang.toLowerCase()) {
        li.click();
        return true;
      }
    });
  }
}

setTimeout(() => {
  addButtons();
}, 100);
