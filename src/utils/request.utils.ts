export class RequestUtils {
  get(url: string, callback: (res: any) => void) {
    GM_xmlhttpRequest({
      method: "GET",
      url: url,
      headers: {
        "User-agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36 Edg/110.0.1587.41",
      },
      onload: function (response: any) {
        // console.log(response.responseText);
        callback(response);
      },
    });
  }

  postByForm(url: string, data: Record<string, any>, callback: (res: any) => void) {
    GM_xmlhttpRequest({
      method: "POST",
      url: url,
      data: new URLSearchParams(data).toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      onload: function (response: any) {
        // console.log(response.responseText);
        callback(response);
      },
    });
  }

  postByJson(url: string, data: Record<string, any>, callback: (res: any) => void) {
    GM_xmlhttpRequest({
      method: "POST",
      url: url,
      data: JSON.stringify(data),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      onload: function (response: any) {
        // console.log(response.responseText);
        callback(response);
      },
    });
  }
}

export default new RequestUtils();
