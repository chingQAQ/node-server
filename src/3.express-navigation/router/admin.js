const express = require('express');
const { resolve } = require('../lib');
const route = express.Router();

route.get('/add-product', (req, res) => {
  res.sendFile(resolve('views', 'add-product.html'));
})

route.post('/add-product', (req, res) => {
  console.log(req.body);
  res.status(302);
  res.redirect('/');
})

module.exports = route;
