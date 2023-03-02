const path = require('path')
const CracoLessPlugin = require('craco-less')
// 定义解析路径的函数
const resolve = (dir) => path.resolve(__dirname, dir)
module.exports = {
  webpack: {
    //给项目定义别名
    alias: {
      '@': resolve('src')
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true
          }
        }
      }
    }
  ]
}
