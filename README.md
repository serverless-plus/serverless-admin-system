# Serverless Admin System

[Demo](https://sls-admin.yugasun.com/)

This is an admin system developed by [Serverless Components](https://github.com/serverless/components).

This template includes:

- **Serverless RESTful API**: Using
  [egg](https://github.com/serverless-components/tencent-egg)
  component, it contains a Servelress Cloud Function and a single API Gateway
  endpoint.

- **Serverless website using Vue.js**:
  [website](https://github.com/serverless-components/tencent-website) component,
  it deploys all static files to Cloud Object Storage, and config CDN domain.

- **Serverless PostgreSQL**:
  [postgresql](https://github.com/serverless-components/tencent-postgresql), it will help to create a serverless postgresql.

> **Notice**: The frontend project is initialed by [@vue/cli](https://cli.vuejs.org/) which is official standard tooling for Vue.js development.

### Content

1. [Prepare](#Prepare)
2. [Download](#Download)
3. [Bootstrap](#Bootstrap)
4. [Deploy](#Deploy)
5. [Development](#Development)

### Prepare

Before all below steps, you should install
[Serverless Framework](https://www.github.com/serverless/serverless) globally:

```bash
$ npm i serverless -g
```

### Download

Severless cli is very convenient, it can download templates in any github
project.

```bash
$ serverless create --template-url https://github.com/yugasun/serverless-admin-system
```

### Bootstrap

Copy `.env.example` file to `.env` in project root:

Add the access keys of a
[Tencent CAM Role](https://bash.cloud.tencent.com/cam/capi) with
`AdministratorAccess` in the `.env` file, like below:

```dotenv
# .env
TENCENT_SECRET_ID=xxx
TENCENT_SECRET_KEY=xxx

REGION=ap-guangzhou
ZONE=ap-guangzhou-2
```

Install the NPM dependencies:

```bash
$ npm run bootstrap
```

### Deploy

Before deployment, we should deploy layer for backend:

```bash
$ npm run deploy:be:layer
```

> Notice: after deploy backend layer once, you don't need deploy it again, unless you change npm dependencies for backend.

Deploy via the `serverless` command:

```bash
$ npm run deploy
```

Use the `--debug` flag if you'd like to learn what's happening behind the
scenes:

```bash
$ npm run deploy --debug
```

### Development

After your first deployment, you will be able to run the frontend locally and
have it communicate to the live backend in the cloud.

```bash
$ npm run start
```

### Notice

Because this project, you should create a [Redis](https://bash.cloud.tencent.com/redis) on Tencent Cloud.

And you should create a `.env` file in `backend`
folder, and set all required parameters like `.env.example`.

### License

MIT
