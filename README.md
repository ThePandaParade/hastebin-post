# hastebin-post
An unofficial https://www.hastebin.com/ library for easier hastebin making

# Requirements
The only current requirement is superagent. I am working to wipe the requirement, yet for now, it requires superagent.

# Installation
``npm i --save hastebin-post superagent``\n 
Or for development version
``npm i --save MainUserDrive/hastebin-post visionmedia/superagent``

# Usage
[Required lib].post('string to post',{options})

# Options
{keyonly: boolean} - Specifies if it should return the key, or the URL. Defaults to: false

# License
ISC
