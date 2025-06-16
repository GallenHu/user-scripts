export class UrlUtils {
  location = {} as any;
  host = "";
  origin = "";

  constructor() {
    this.location = window.location;
    this.host = this.location.host;
    this.origin = this.location.origin;
  }

  isDomain(domain: string): boolean {
    return this.host.endsWith(domain);
  }

  getQueryFromHash(key: string): string | null {
    const hash = window.location.hash;
    if (!hash) {
      return null;
    }
    const search = hash.substring(hash.indexOf("?"));
    const urlSearchParams = new URLSearchParams(search);
    return urlSearchParams.get(key);
  }
}

export default new UrlUtils();
