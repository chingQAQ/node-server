const express = require('express');
const app = express();
const { join } = require('path');
const {
  adminRoute,
  shopRoute,
  errorHandler,
} = require('./router');
const PORT = 4000;

app.set('view engine', 'ejs');
app.set('views', join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));
app.use('/admin', adminRoute);
app.use(shopRoute);

/* 404 page not found handler */
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
