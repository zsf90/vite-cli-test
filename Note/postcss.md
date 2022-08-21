vite天生对postcss有非常好的支持


js 导出方式：

## node.js 导出模块的方式（两种）：
1. exports
2. module.exports

例子：
```javascript
const PI = 3.14;
const add = (a, b) => a + b;

// 方法1：
exports.PI = PI;
exports.add = add;

// 方法2：
module.exports.PI = PI;
module.exports.add = add;

// 方法2（变形）
module.exports = {
    PI,
    add
}
```