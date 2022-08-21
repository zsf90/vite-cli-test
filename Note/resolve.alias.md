# resolve.alias 别名原理

```javascript
import { defineConfig } from "vite";
const path = require("path");

export default defineConfig({
    resolve: { // 别名配置
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@assets": path.resolve(__dirname, "./src/assets")
        }
    },
})
```