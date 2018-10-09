const routes = require('next-routes');

module.exports = routes()
  .add({
    name: 'home',
    pattern: '/',
    page: 'index',
  })
  .add({
    name: 'section-tactical',
    pattern: '/section/:alias(tactical)',
    page: 'section/tactical',
  })
  .add({
    name: 'section',
    pattern: '/section/:alias(.*)',
    page: 'section',
  })
  .add({
    name: 'page',
    pattern: '/page/:alias',
    page: 'page',
  })
  .add({
    name: 'content',
    pattern: '/:prefix(.*):id(\\d{8}):suffix(.*)',
    page: 'content',
  });
