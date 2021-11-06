const { ObjectId } = require('mongodb');
const Client = require('../util/database');

module.exports = class User {
  constructor(name, email, cart, id) {
    this.name = name;
    this.email = email;
    this.cart = cart ?? {};
    this._id = id;
  }

  addToCart(product) {
    let newQuantity = 1;
    let updateCartItems = [];
    const cartProductIndex = this.cart.items?.findIndex(i => {
      return product._id.toString() === i.productId.toString();
    });

    if (this.cart.items) {
      updateCartItems = [...this.cart.items];
    }

    if (cartProductIndex >= 0) {
      newQuantity = this.cart.items[cartProductIndex].quantity + 1;
      updateCartItems[cartProductIndex].quantity = newQuantity;
    } else {
      updateCartItems.push({
        productId: new ObjectId(product._id),
        quantity: newQuantity
      })
    }

    const updateToCart = {
      items: updateCartItems
    }

    return Client
      .getDb()
      .collection('users')
      .updateOne(
        { _id: new ObjectId(this._id) },
        {$set: {
          cart: updateToCart
        }}
      );

  }

  static save() {
    return Client.getDb().collection('users').insertOne(this);
  }

  static findById(userId) {
    return Client.getDb().collection('users').findOne({ _id: new ObjectId(userId) });
  }
}
