export class Aria2Utils {
  downloadByMotrix(url: string, referer?: string): Promise<any> {
    const data = {
      jsonrpc: "2.0",
      method: "aria2.addUri",
      id: Number(Date.now().toString().slice(-4)),
      params: [
        [url],
        {
          split: "64",
          "max-connection-per-server": "5",
          "seed-ratio": "0",
          referer: referer || "",
        },
      ],
    };

    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
}

export default new Aria2Utils();
