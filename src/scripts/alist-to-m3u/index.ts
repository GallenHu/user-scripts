interface PlayItem {
  href: string;
  name: string;
}

function checkGenerator() {
  const generator = document.querySelector('meta[name="generator"]')?.getAttribute("content") || "";
  return generator.toLowerCase().indexOf("alist") > -1;
}

function generatorM3UContent(playList: PlayItem[]) {
  const xml = ["#EXTM3U"];
  if (playList?.length) {
    playList.forEach(obj => {
      xml.push(`#EXTINF:-1,${obj.name}`);
      xml.push(obj.href);
    });
  }

  return xml.join("\n");
}

function insertDownloadButton() {
  const $body = document.querySelector("body");
  const button = document.createElement("button");
  button.id = "downloadM3U";
  button.classList.add("hope-button");
  button.innerText = "生成M3U";
  button.setAttribute(
    "style",
    "cursor:pointer;position:fixed;top:10px;left:10px;font-size:14px;padding: 4px 8px;border: 1px solid #96c7f2;background:#fff;"
  );
  $body?.appendChild(button);
  button.addEventListener("click", onClickM3UDownloadButton);
}

function onClickM3UDownloadButton() {
  const list = document.querySelectorAll(".list a.list-item");
  const output: PlayItem[] = [];

  list.forEach(link => {
    let href = (link as HTMLAnchorElement).href;
    const basePath = (window as any).ALIST?.base_path || "/";
    const origin = window.location.origin;
    const alistRootUri = origin + basePath;
    href = href.replace(alistRootUri, alistRootUri + "d/");

    const nameDom = link.querySelector(".name");
    const name = nameDom ? (nameDom as HTMLElement).innerText : "";
    output.push({ href, name });
  });

  const xml = generatorM3UContent(output);
  // console.log(xml);
  const blob = new Blob([xml], { type: "text/plain;charset=utf-8" });
  (window as any).saveAs(blob, "playlist.m3u");
}

let checkList: any = () => {
  const list = document.querySelectorAll(".list a.list-item");

  if (list.length) {
    insertDownloadButton();

    // destroy
    checkList = () => null;
  }
};

function start() {
  if (!checkGenerator()) {
    return false;
  }

  const $root = document.querySelector("#root");
  if ($root) {
    const observer = new MutationObserver(checkList);
    observer.observe($root, { childList: true, subtree: true });
  }
}

start();
