# Serverless Admin System

[在线体验](https://sls-admin.yugasun.com/)

使用 [Serverless Components](https://github.com/serverless/components) 开发的后台管理系统

1. [安装 CLI](#安装-CLI)
2. [初始化项目](#初始化项目)
3. [配置](#配置)
4. [部署](#部署)
5. [开发](#开发)

### 安装 CLI

在开始之前需要先安装 [Serverless CLI](https://github.com/serverless/serverless) 工具

```bash
$ npm i serverless -g
```

### 初始化项目

Serverless 命令行工具非常方便，可以直接初始化项目模板：

```bash
$ serverless init admin-system
```

安装项目依赖：

```bash
$ npm run bootstrap
```

### 项目目录介绍

```
├── backend         后端服务，Egg.js + PostgreSQL + Redis
├── db              Serverless PG，使用 tencent-postgresql 组件部署创建
├── frontend        前端页面，Vue.js + vue-admin-template，项目模板：https://github.com/PanJiaChen/vue-admin-template
├── package.json
├── scripts         项目脚本，主要含有 bootstrap.js 用来自动安装前后端项目依赖
└── vpc             Serverless VPC，使用 tencent-vpc 组件部署，用来创建腾讯云私有网络
```

### 配置

复制项目根目录的 `.env.example` 文件为 `.env`，内容如下：

```dotenv
# .env
TENCENT_SECRET_ID=xxx
TENCENT_SECRET_KEY=xxx

REGION=ap-guangzhou
ZONE=ap-guangzhou-2
```

> 注意：`TENCENT_SECRET_ID` 和 `TENCENT_SECRET_KEY` 可以到 [腾讯云 CAM 控制台](https://bash.cloud.tencent.com/cam/capi) 获取。

由于后端服务使用 `redis` 来存储接口鉴权 Token，所以我们还需要给后端项目配置 redis 建连参数，复制 `backend` 目录的 `.env.example` 为 `.env`，然后配置自己的 redis 服务参数：

```dotenv
REDIS_HOST=xxx
REDIS_PORT=xxx
REDIS_PASSWORD=xxx
```

此项目也支持 [Authing](https://authing.cn/) 第三方登录，如果你不需要可以直接忽略，如果需要，可以到 [Authing 控制台](https://console.authing.cn/login) 获取配置，然后添加到 `backend/.env` 中：

```dotenv
REDIS_HOST=xxx
REDIS_PORT=xxx
REDIS_PASSWORD=xxx

# authing 应用配置
AUTHING_APPID=xxx
AUTHING_APPSECRET=xxx
```

### 本地开发

后端服务使用的的数据库均使用本地 [Docker](https://www.docker.com/) 来启动，所以本地开发时，需要先启动 docker 服务：

```bash
$ npm run docker:up
```

#### 启动后端服务

```bash
$ npm run dev:be
```

#### 启动前端开发

```bash
$ npm run dev:fe
```

### 部署

在部署业务代码之前，我们需要先将后端的 `node_modules` 文件夹部署为层：

```bash
$ npm run deploy:be:layer
```

> 注意：在层部署成功后，如果后端项目的 `node_modules` 没有修改，可以不用再次执行层部署。

部署项目代码：

```bash
$ npm run deploy
```

### 初始化数据库

部署成功后，我们就可以获得数据库相关参数，其中 postgresql 输出的 `public` 对象中的参数是用来公网访问的。

在访问服务前，我们还需要同步数据库表结构，修改 `database/config.js` 中的 `production` 对象的配置为 postgresql 输出的 `public` 对象中的参数值，

相关参数对应关系：

| `postgresql.public` 输出 | `database/config.js` 中 `production` 参数 |
| :----------------------: | :---------------------------------------: |
|           host           |                   host                    |
|           port           |                   post                    |
|           user           |                 username                  |
|         password         |                 password                  |
|          dbname          |                 database                  |

然后我们执行：

```bash
$ npm run db:migrate
```

就可以自动帮助初始化数据库，包括表结构和测试数据。

### License

MIT License

Copyright (c) 2020 Serverless Plus
