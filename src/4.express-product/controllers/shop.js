const Product = require('../models/product');
const User = require('../models/user');

exports.getProducts = async (req, res, next) => {
  const response = await Product.fetchAll().catch(err => console.log(err));

  if (response) {
    return res.render('shop/product-list', {
      prods: response,
      pageTitle: 'All Products',
      path: '/products'
    });
  }
};

exports.getProduct = async (req, res, next) => {
  const prodId = req.params.productId;
  const response = await Product.findById(prodId).catch(err => console.log(err));

  if (response) {
    return res.render('shop/product-detail', {
      product: response,
      pageTitle: response.title,
      path: '/products'
    });
  }
};

exports.getIndex = async (req, res, next) => {
  const response = await Product.fetchAll().catch(err => console.log(err));
  if (response) {
    return res.render('shop/index', {
      prods: response,
      pageTitle: 'Shop',
      path: '/'
    });
  }
};

// exports.getCart = (req, res, next) => {
//   Cart.getCart(cart => {
//     Product.fetchAll(products => {
//       const cartProducts = [];
//       for (product of products) {
//         const cartProductData = cart.products.find(
//           prod => prod.id === product.id
//         );
//         if (cartProductData) {
//           cartProducts.push({ productData: product, qty: cartProductData.qty });
//         }
//       }
//       res.render('shop/cart', {
//         path: '/cart',
//         pageTitle: 'Your Cart',
//         products: cartProducts
//       });
//     });
//   });
// };

exports.postCart = async (req, res, next) => {
  const prodId = req.body.productId;

  try {
    const product = await Product.findById(prodId);
    req.user.addToCart(product);


  } catch (error) {
    console.log(error);
  }

};

// exports.postCartDeleteProduct = (req, res, next) => {
//   const prodId = req.body.productId;
//   Product.findById(prodId, product => {
//     Cart.deleteProduct(prodId, product.price);
//     res.redirect('/cart');
//   });
// };

// exports.getOrders = (req, res, next) => {
//   res.render('shop/orders', {
//     path: '/orders',
//     pageTitle: 'Your Orders'
//   });
// };

// exports.getCheckout = (req, res, next) => {
//   res.render('shop/checkout', {
//     path: '/checkout',
//     pageTitle: 'Checkout'
//   });
// };
