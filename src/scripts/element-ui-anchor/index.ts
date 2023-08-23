let lastHash = "";

function callback(mutationsList: any, observer: any) {
  const hash = window.location.hash.split("#")[1];

  if (hash !== lastHash) {
    const $mainSection = document.querySelector("section.element-doc");

    if ($mainSection) {
      const h3s = $mainSection.querySelectorAll("h3");
      const html: string[] = [];
      Array.from(h3s).forEach(dom => {
        const id = dom.id;
        const text = (dom as any).innerText;
        html.push(`<li><a href="#${hash}#${id}">${text}</a></li>`);
      });

      const menu = document.createElement("ul");

      menu.innerHTML = html.join("");

      menu.setAttribute(
        "style",
        `position: fixed; list-style: none; top: 80px; right: 10px; padding: 10px; max-height: 300px; overflow: auto; background: #fff; border: 1px solid #ddd;`
      );

      $mainSection.appendChild(menu);
      lastHash = hash;
    }
  }
}

const observer = new MutationObserver(callback);

observer.observe(document.body, { subtree: true, childList: true });
