'use strict';

const Controller = require('egg').Controller;

class ProductController extends Controller {
  async index() {
    const { ctx } = this;
    const res = await ctx.service.product.index();
    ctx.body = res;
  }

  /**
   * get 请求，url 传递参数
   */
  async detail() {
    const { ctx } = this;
    console.log(ctx.query);
    ctx.body = ctx.query;
  }

  /**
   * get 请求，restful 风格传参
   */
  async intro() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params;
  }

  /**
   * post 请求，json 传递参数
   */
  async add() {
    const { ctx } = this;
    console.log(ctx.request.body);
    ctx.body = ctx.request.body;
  }

  /**
   * put 请求，restful 风格传参
   */
  async update() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params;
  }

  /**
   * delete 请求，restful 风格传参
   */
  async delete() {
    const { ctx } = this;
    console.log(ctx.params);
    ctx.body = ctx.params;
  }
}

module.exports = ProductController;