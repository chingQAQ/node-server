const PORT = 8000;
const router = require('../lib/router');
const http = require('http');
const server = http.createServer(router);

server.listen(PORT, () => {
  console.log(`server listening on port: ${ PORT }`);
});

