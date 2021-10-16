const { greeting, basicallyQuestion } = require('../lib/middleware');
const express = require('express');
const app = express();
const PORT = 4000;

app.use(greeting, basicallyQuestion);
app.use('/', (req, res, next) => {
  if (req.user && req.url === '/') {
    return res.send(`Hi ${req.user.answer}, ${req.user.greeting}!`);
  }
  res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
  next();
})
app.use('/users', (req, res) => {
  if (req.user && req.originalUrl === '/users') {
    return res.send(`${req.user.answer}, would you want to Log out now?`);
  }

  res.send('<h1>Login</h1>');
})

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
})

