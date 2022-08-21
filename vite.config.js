// 配置 开启 vite 配置自动补全
// 需要特殊处理后 vscode 才能实现 vite 配置的自动补全

import { loadEnv } from "vite";
import { defineConfig } from "vite";

// 方法1： 导入 `import { defineConfig } from 'vite';
// export default defineConfig({
//
// })
// import { defineConfig } from 'vite';
// export default defineConfig({
//     optimizeDeps: {
//         exclude: [],
//     }
// });

// 方法2：
// /** @type import("vite").UserConfig  */
// const viteConfig = {
//     optimizeDeps: {},
// };

// export default viteConfig;


// 判断环境
// export default defineConfig(({ command, config }) => {
//     if (command === 'build') {
//         // 开发环境
//     } else {
//         // 生成环境
//     }
// })

import viteBaseConfig from "./vite.base.config";
import viteDevConfig from "./vite.dev.config";
import viteProdConfig from "./vite.prod.config";

// 策略模式
const envResolver = {
    "build": () => {
        console.log("生产环境");
        return Object.assign({}, viteBaseConfig, viteProdConfig)
    },
    "serve": () => {
        console.log("开发环境");
        return Object.assign({}, viteBaseConfig, viteDevConfig)
    }
}

export default defineConfig(({ command, mode }) => {

    const env = loadEnv(mode, process.cwd(), ""); // loadEnv() 会根据mode选择env配置文件
    console.log("process: ", env);

    // console.log("mode:", mode);
    return envResolver[command]();
})