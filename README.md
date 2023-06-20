# Site web de Camille Lambert et son activité de production de Quinoa

[![Netlify Status](https://api.netlify.com/api/v1/badges/34335ba7-d529-423e-8140-41eb18f5fbfd/deploy-status)](https://app.netlify.com/sites/inflorescences-quinoa/deploys)

## Pré-requis

- [Git bash](https://git-scm.com/downloads)
- [NodeJS 18.0.0](https://nodejs.org/en/blog/release/v16.13.1/)
- [Visual Studio Code](https://code.visualstudio.com/download)

## Getting started

Using yarn makes the installation **much quicker**.

```sh
npm install --global yarn #(or use the .msi => https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)
yarn
```

Then, launch the project:

```sh
npm run docs:dev
```

Or to build it:

```sh
npm run docs:build
```

## VuePress changelogs to upgrade

See [this link](https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md).

1. run `yarn upgrade vuepress-vite@2.0.0-beta.XX`
2. run `rm -R node_modules && rm yarn.lock && yarn install`
3. run `npm run docs:build`
4. run `npm run docs:dev` to see if the site loads and renders well :)

## VuePress theme upgrade

Run:

```sh
yarn upgrade vuepress-theme-hope@2.0.0-beta.XX
```
