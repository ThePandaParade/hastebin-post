const superagent = require('superagent')
exports.post = async function(string, options) {
    if (string === undefined) {throw "String is a required argument"}
    const req = await superagent.post('https://www.hastebin.com/documents')
     .send(string)
     .catch((err) => {throw "Failed to "})
    return `https://hastebin.com/${req.body.key}` 
}
