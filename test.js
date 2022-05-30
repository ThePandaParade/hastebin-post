/* jshint esversion: 6 */

const hastebin = require("./hastebin");

hastebin("Hello, world!")
  .then((url) => console.log(`URL: ${url}`));
