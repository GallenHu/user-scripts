export class UrlUtils {
  location = {} as any;
  host = "";

  constructor() {
    this.location = window.location;
    this.host = this.location.host;
  }
}

export default new UrlUtils();
