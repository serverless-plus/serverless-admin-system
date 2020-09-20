# Backend for serverless-admin-system

## QuickStart

<!-- add docs here for user -->

see [egg docs][egg] for more detail.

### Local Development

**Firstly, start local docker images for postgresql and redis.**

```bash
$ npm run docker:up
```

> Notice: docker must be installed.

**Then, copy `.env.example` file to `.env.local`, and config for postgresql and redis.**

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see
  [autod](https://www.npmjs.com/package/autod) for more detail.

[egg]: https://eggjs.org
