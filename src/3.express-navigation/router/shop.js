const express = require('express');
const { resolve } = require('../lib');
const route = express.Router();

route.get('/', (req, res) => {
  res.sendFile(resolve('views', 'shop.html'));
})

module.exports = route;
