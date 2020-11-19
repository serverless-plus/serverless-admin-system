'use strict';

module.exports = {
  production: {
    // TODO: 修改为部署 serverless postgresql 的 public 配置
    host: 'postgres-xxx.sql.tencentcdb.com',
    post: 5432,
    username: 'tencentdb_xxx',
    password: 'xxx',
    database: 'tencentdb_xxx',
    dialect: 'postgres',
  },
  test: {
    username: 'root',
    password: 'root',
    database: 'admin-system',
    host: '127.0.0.1',
    post: 5432,
    dialect: 'postgres',
  },
};
