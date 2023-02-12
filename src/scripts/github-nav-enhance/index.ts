import UrlUtils from "../../utils/url.utils";
import DomUtils from "../../utils/dom.utils";

function modifyGithub() {
  const userName = document.querySelector('meta[name="user-login"]')!.getAttribute("content");

  const nav = document.querySelector("nav.d-flex") as HTMLElement;
  if (nav) {
    const menus = nav.innerText.toLowerCase();
    const html = `<a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links="/${userName}?tab=repositories" href="/${userName}?tab=repositories">Repositories</a>
          <a class="js-selected-navigation-item Header-link flex-auto mt-md-n3 mb-md-n3 py-2 py-md-3 mr-0 mr-md-3 border-top border-md-top-0 border-white-fade-15" data-ga-click="Header, click, Nav menu - item:marketplace context:user" data-octo-click="marketplace_click" data-octo-dimensions="location:nav_bar" data-selected-links="/${userName}?tab=repositories" href="/${userName}?tab=stars">Stars</a>
         `;

    if (menus.indexOf("repositories") === -1) {
      nav.insertAdjacentHTML("beforeend", html);
    }
  }
}

function modifyGitlab() {
  // @ts-ignore
  const gon = (unsafeWindow as any).gon;
  if (gon) {
    const userName = gon.current_username;
    const nav = document.querySelector("ul.navbar-sub-nav") as HTMLElement;
    const html = `<ul class="nav navbar-sub-nav">
        <li class="nav-item">
            <a href="/dashboard/projects">Repositories</a>
        </li>
        <li class="nav-item">
            <a href="/users/${userName}/starred">Stars</a>
        </li>
        </ul>
        `;

    const titleContainer = document.querySelector(".title-container") as HTMLElement;

    if (nav && titleContainer) {
      const menus = titleContainer.innerText.toLowerCase();
      if (menus.indexOf("repositories") === -1) {
        titleContainer.insertAdjacentHTML("beforeend", html);
      }
    }
  }
}

if (UrlUtils.isDomain("github.com")) {
  if ((window as any).onurlchange === null) {
    window.addEventListener("urlchange", modifyGithub);
  }
} else {
  // gitlab
  DomUtils.observeDOM(document.querySelector("head") as HTMLElement, modifyGitlab);
}
