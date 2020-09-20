/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');

const isLocal = process.env.EGG_SERVER_ENV === 'local';
if (isLocal) {
  require('dotenv').config({
    path: path.join(__dirname, '..', '.env.local'),
  });
}

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580783791359_8688';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    deployUrl: 'http://127.0.0.1:7001/',
    authRedirectUrl: 'http://localhost:9528/#/login',
    sequelize: {
      sync: true, // whether sync when app init
      dialect: 'postgres',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
    },
    redis: {
      client: {
        port: process.env.REDIS_PORT,
        host: process.env.REDIS_HOST,
        password: process.env.REDIS_PASSWORD,
        db: 0,
      },
    },
    security: {
      csrf: {
        enable: false,
      },
    },
    cors: {
      origin: '*',
      allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
    },
    authing: {
      appId: process.env.AUTHING_APPID,
      appSecret: process.env.AUTHING_APPSECRET,
    },
    jwt: {
      secret: '123456',
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
