# vite 在生产环境对静态资源的处理


```javascript

import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
    build: { // 生产环境配置
        rollupOptions: { // 配置rollup的一些构建策略
            output: { // 控制输出
                // 在rollup里面，hash代表将你的文件名和文件内容进行组合计算得来的结果
                assetFileNames: "[name].[hash].[ext]"
            }
        },
        assetsInlineLimit: 4096,
        outDir: "dist", // 可以修改默认的build输出路径名，默认为 dist
        assetsDir: "static", // 修改静态资源默认路径，默认路径名为：assets
    }
})
```