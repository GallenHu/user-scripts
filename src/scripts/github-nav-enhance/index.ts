function modifyGithub() {
  const userName = document.querySelector('meta[name="user-login"]')!.getAttribute("content");
  const nav = document.querySelector("nav ul[role='list']") as HTMLElement;

  if (nav) {
    if (nav.getAttribute("data-enhanced") === "1") return;

    const menus = [];

    // repositories
    menus.push(`
    <li>
      <a href="https://github.com/${userName}?tab=repositories" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label">
          Your repositories
        </span>
      </a>
    </li>
    `);

    // stars
    menus.push(`
    <li>
      <a href="https://github.com/${userName}?tab=stars" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label">
          Your stars
        </span>
      </a>
    </li>
    `);

    // organizations
    menus.push(`
    <li>
      <a href="https://github.com/settings/organizations" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label">
          Your organizations
        </span>
      </a>
    </li>
    `);

    // gists
    menus.push(`
    <li>
      <a href="https://gist.github.com/mine" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label">
          Your gists
        </span>
      </a>
    </li>
    `);

    // placeholder
    menus.push(`
    <li>
      <a href="javascript:void(0)" data-view-component="true" class="AppHeader-context-item">
        <span class="AppHeader-context-item-label"></span>
      </a>
    </li>
    `);

    nav.innerHTML += menus.join("");
    nav.setAttribute("data-enhanced", "1");
  }
}

if ((window as any).onurlchange === null) {
  window.addEventListener("urlchange", modifyGithub);
}
