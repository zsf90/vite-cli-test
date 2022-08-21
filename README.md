# Vite 学习笔记

该项目为我学习 Vite 的例子项目。

## 安装 Vite
> 兼容性
> Vite requires Node.js version 14.18+, 16+. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

我们可以使用命令单独安装 vite：
```shell
pnpm init
pnpm add vite -D
```

## 在 package.json 中添加 scripts
```json
{
  "name": "vite-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "lodash": "^4.17.21",
    "vite": "^3.0.8"
  }
}
```

运行：
```shell
pnpm dev
pnpm build
pnpm preview
```