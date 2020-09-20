'use strict';

const { Application } = require('egg');

Object.defineProperty(Application.prototype, Symbol.for('egg#eggPath'), {
  value: '/opt',
});

const app = new Application({
  env: 'prod',
  mode: 'single',
});

app.binaryTypes = [ '*/*' ];

module.exports = app;
