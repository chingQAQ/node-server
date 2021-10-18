const express = require('express');
const route = express.Router();

/* 404 handler */
route.use((req, res) => {
  res.render('404', { title: 'Page not found', path: '/error' });
})

/* 500 handler */
route.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    res.status(500).send('Something broke!');
    next();
  }
})

module.exports = route;
