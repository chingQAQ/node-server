// const Client = require('../util/database');
const { ObjectId } = require('mongodb');
const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/edit-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    editing: false
  });
};

exports.postAddProduct = async ({ body: { title, imageUrl, price, description } }, res, next) => {
  const product = new Product(title, imageUrl, description, price);
  const response = await product.save();

  if (response.status === 'done') {
    return res.redirect('/');
  }

  return res.redirect('/');
};

exports.getEditProduct = async (req, res, next) => {
  const editMode = req.query.edit;

  if (!editMode) {
    return res.redirect('/');
  }

  const prodId = req.params.productId;
  const response = await Product.findById(prodId);

  if (response) {
    return res.render('admin/edit-product', {
      pageTitle: 'Edit Product',
      path: '/admin/edit-product',
      editing: editMode,
      product: response
    });
  }

  return res.redirect('/');
};

exports.postEditProduct = async ({ body: { productId, title, imageUrl, price, description }}, res, next) => {
  const prodId = productId;
  const updatedTitle = title;
  const updatedPrice = price;
  const updatedImageUrl = imageUrl;
  const updatedDesc = description;
  const updatedProduct = new Product(
    updatedTitle,
    updatedImageUrl,
    updatedDesc,
    updatedPrice,
    new ObjectId(prodId),
  );
  const dispatchUpdate = await updatedProduct.save().catch(error => console(error));

  if (dispatchUpdate.status === 'done') {
    return res.redirect('/admin/products');
  }
};

exports.getProducts = async (req, res, next) => {
  const response = await Product.fetchAll().catch(err => console.log(err));
  
  if (response) {
    return res.render('admin/products', {
      prods: response,
      pageTitle: 'Admin Products',
      path: '/admin/products'
    });
  }
};

// exports.postDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.deleteById(prodId);
//   res.redirect('/admin/products');
// };
