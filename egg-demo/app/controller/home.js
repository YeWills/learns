'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    await ctx.render('index.html', { res });
  }
}

module.exports = HomeController;
