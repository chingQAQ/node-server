const express = require('express');
const { resolve } = require('../lib');
const route = express.Router();
const data = [];

route.get('/add-product', (req, res) => {
  res.render('add-product', { title: 'Add Product', api: '/admin/add-product', path: '/admin/add-product'});
})

route.post('/add-product', (req, res) => {
  data.push(req.body);
  console.log(data)
  res.status(302);
  res.redirect('/');
})

module.exports = {
  route,
  data
};
