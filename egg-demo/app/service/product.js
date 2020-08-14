'use strict';

const Service = require('egg').Service;

class ProductService extends Service {
  async index() {
    return {
      id: 1,
      name: 'zh_kai',
    };
  }
}

module.exports = ProductService;