const Client = require('../util/database');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  async save() {
    try {
      const insertResult = await Client.getDb().collection('products').insertOne(this);
      if (!insertResult) {
        throw new Error('insert is unsuccess');
      }
      
      return {
        insertResult,
        status: 'done',
        message: 'This data is insert.'
      };
    } catch (error) {
      return {
        status: 'false',
        message: 'False to add data.'
      };
    }
  }
};
