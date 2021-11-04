const { ObjectId } = require('mongodb');
const Client = require('../util/database');

module.exports = class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  static save() {
    return Client.getDb().collection('users').insertOne(this);
  }

  static findById(userId) {
    return Client.getDb().collection('users').findOne({ _id: new ObjectId(userId) });
  }
}
