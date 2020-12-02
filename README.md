# hastebin-post
An unofficial library for https://hastebin.com/ which makes 'paste'-creation significantly easier.

## Install
Stable Release:
```sh
$ npm install hastebin-post
# or with Yarn
$ yarn add hastebin-post
```  

GitHub Development Version:  
```sh
$ npm install FlareonUwU/hastebin-post
# or with Yarn
$ yarn add FlareonUwU/hastebin-post
``` 

## Usage
```js
const hastebin = require("hastebin-post");

hastebin("Hello, world!")
  .then((url) => console.log(`URL: ${url}`));
```

### License
[MIT Copyright 2018-2019 FlareonUwU](./LICENSE)
