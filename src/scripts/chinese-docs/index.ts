function enhanceRxJS() {
  const $ul = document.querySelector("aio-shell > mat-toolbar > mat-toolbar-row:nth-child(2) > aio-top-menu > ul");
  const { pathname } = window.location;
  const btnSearch = `<li class="ng-star-inserted"><a class="nav-link" href="https://rxjs.tech${pathname}" title="中文版">中文版</a></li>`;
  $ul?.insertAdjacentHTML("beforeend", btnSearch);
}

enhanceRxJS();
