function addHeaderButtons() {
  const $wrap = document.querySelector("ul.icons.d-header-icons");
  if ($wrap) {
    console.log("$wrap found");
    const $li = document.createElement("li");
    $li.className = "search-dropdown header-dropdown-toggle";

    const $a = document.createElement("a");
    $a.className = "btn no-text btn-icon icon btn-flat";
    $a.href = "https://linux.do/u/gallen/activity/likes-given";
    $a.title = "我的点赞";
    $a.setAttribute("type", "button");

    jQuery($a).append(
      '<svg class="fa d-icon d-icon-heart svg-icon svg-string" xmlns="http://www.w3.org/2000/svg"><use href="#heart"></use></svg>'
    );

    $li.appendChild($a);

    jQuery($wrap).prepend($li);
  } else {
    console.error("$wrap not found");
  }
}

window.addEventListener("load", () => {
  // const observer = new MutationObserver(mutations => {
  //   console.log("mutations", mutations);
  //   mutations.forEach(mutation => {
  //     if (mutation.type === "attributes" && mutation.attributeName === "class") {
  //       addHeaderButtons();
  //     }
  //   });
  // });

  // observer.observe(document.body, { attributes: true, attributeFilter: ["class"] });

  addHeaderButtons();
});
