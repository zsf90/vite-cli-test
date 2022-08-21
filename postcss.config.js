const postcssPresetEnv = require('postcss-preset-env');
const path = require('path');

module.exports = {
    plugins: [
        postcssPresetEnv({
            importFrom: path.relative(__dirname, './variable.css'),
        })
    ]
}