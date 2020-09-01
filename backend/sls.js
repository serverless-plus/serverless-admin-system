'use strict';

const { Application } = require('egg');

Object.defineProperty(Application.prototype, Symbol.for('egg#eggPath'), {
  value: '/opt',
});

const app = new Application({
  env: 'prod',
  mode: 'single',
});

module.exports = app;
