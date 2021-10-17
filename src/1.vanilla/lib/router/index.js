module.exports = function requestListener(req, res) {
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html');
    res.write('hello world!');
    res.write(`
      <html>
        <head></head>
        <form action="/create-user" method="POST">
          <input type="text" name="username">
          <button type="submit"> Send </button>
        </form>
      </html>
    `);
  }

  if (req.url === '/users') {
    res.setHeader('Content-Type', 'text/html');
    res.write(`
      <html>
        <head></head>
        <ul><li>Aion chiu</li><li>xxx</li></ul>
      </html>
    `);
  }

  if (req.url === '/create-user' && req.method === 'POST') {
    const body = [];

    req.on('data', function(chunk) {
      body.push(chunk);
    });
    req.on('end', function () {
      const parse = Buffer.concat(body).toString();
      const [key, value] = parse.split('=');

      console.log(`${key} is ${value}.`);
    });

    res.statusCode = 301;
    res.setHeader('Location', '/');
  }

  return res.end();
}