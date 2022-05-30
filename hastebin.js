/* jshint esversion: 6 */

(() => "use strict")();

const https = require("https");

module.exports = (string) => {
  return new Promise((resolve, reject) => {
    if (!string) return reject("Argument 'string' not found.");
    if (typeof(string) != "string") return reject("Argument 'string' must be of type string.");
    if (string.length <= 0) return reject("Argument 'string' is empty, please consider adding some text!");

    const request = https.request({
      host: "hastebin.com",
      path: "/documents",
      method: "POST",
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Content-Length": Buffer.byteLength(string)
      }
    });

    request
      .once("response", (response) => {
        const body = [ ];
        response
          .on("data", (chunk) => body.push(chunk))
          .on("error", (err) => reject(err))
          .on("end", () => {
            const key = JSON.parse(Buffer.concat(body)).key;
            return resolve(`https://hastebin.com/${key}`);
          });
      })
      .once("error", (error) => reject(error));

    return request.end(string);
  });
};
