module.exports = {
  adminRoute: require('./admin').route,
  shopRoute: require('./shop'),
  errorHandler: require('./404')
}