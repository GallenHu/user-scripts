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
}

export default new UrlUtils();
