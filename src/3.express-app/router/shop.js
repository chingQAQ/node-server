const express = require('express');
const { data } = require('./admin');
const route = express.Router();

route.get('/', (req, res) => {
  res.render('shop', {
    title: 'shop',
    path: '/',
    data
  });
})

module.exports = route;
