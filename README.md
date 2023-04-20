# vscode-config

Frequently used development configurations in VSCode.

# 相关技术栈

Vue、Unocss、图标 icones.js.org

# Eslint

参考 [antfu/eslint-config](https://github.com/antfu/eslint-config) 。移除了TS的校验。

## Install

```
pnpm i -D eslint eslint-plugin-import @unocss/eslint-config @raythunder/eslint-config
```

## Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

`eslint-plugin-import` 用于处理vue-router 路由文件中异步 `import` eslint 报错

# Unocss 

```
pnpm i @iconify-json/ic @iconify-json/mdi @unocss/preset-rem-to-px -D
```
