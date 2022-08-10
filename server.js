const static = require('node-static');
const http = require('http');

const PORT = 8080;

const file = new static.Server(`${__dirname}/dist`);

http
  .createServer((req, res) => {
    file.serve(req, res);
  })
  .listen(PORT);
