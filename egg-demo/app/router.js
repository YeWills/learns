'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);

  router.get('/product', controller.product.index);
  router.get('/product/detail', controller.product.detail);
  router.get('/product/intro/:id/:name', controller.product.intro);
  router.post('/product/add', controller.product.add);
  router.put('/product/update/:id', controller.product.update);
  router.delete('/product/delete/:id', controller.product.delete);
};