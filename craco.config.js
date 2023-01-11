const path = require('path')
module.exports = {
    webpack: {
        // 给项目起别名
        alias: {
            "@": path.resolve(__dirname, "src"),
        }
    },
};