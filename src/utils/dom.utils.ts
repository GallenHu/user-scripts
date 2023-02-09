export class DomUtils {
  observeDOM(obj: HTMLElement, callback: any) {
    const MutationObserver = window.MutationObserver || (window as any).WebKitMutationObserver;
    const mutationObserver = new MutationObserver(callback);
    mutationObserver.observe(obj, { childList: true, subtree: true });
    return mutationObserver;
  }
}

export default new DomUtils();
