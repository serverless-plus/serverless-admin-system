/* eslint valid-jsdoc: "off" */

'use strict';

const isLocal = process.env.EGG_SERVER_ENV === 'local';
if (!isLocal) {
  require('dotenv').config();
}

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {
    env: 'prod', // 推荐云函数的 egg 运行环境变量修改为 prod
    rundir: '/tmp',
    logger: {
      dir: '/tmp',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1580783791359_8688';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // TODO: should change to deploy url.
    deployUrl: 'https://service-duvw8ocm-1251556596.gz.apigw.tencentcs.com/release/',
    authRedirectUrl: 'https://sls-admin.yugasun.com/#/login',
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
    jwt: {
      secret: process.env.AUTHING_APPSECRET,
    },
    authing: {
      appId: process.env.AUTHING_APPID,
      appSecret: process.env.AUTHING_APPSECRET,
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
