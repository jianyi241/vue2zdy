process.env.VUE_APP_VERSION = require('./package.json').version
const path = require('path')
const IS_PRO = process.env.ENV === 'production'
const resolve = dir => path.join(__dirname, dir)

module.exports = {
    publicPath: IS_PRO ? '/' : '/', // 部署应用包时的基本 URL,默认'/'
    outputDir: 'dist', // build 时生成的生产环境构建文件的目录
    assetsDir: 'static', // build 时生成的静态资源文件夹 相对于outputDir
    indexPath: 'index.html', // build 时index.html的输出路径 相对于outputDir
    filenameHashing: false, // 关闭文件hash
    lintOnSave: !IS_PRO, // 在每次保存时 lint 代码,不符合要求会编译不通过
    productionSourceMap: !IS_PRO, // 在生产环境中不产生source map
    chainWebpack: config => {
        config.resolve.alias.set('@', resolve('./src')) // 配置路径别名
    },
    css: { // css 样式配置
        // extract: true, // 是否使用css分离插件
        sourceMap: false, // 是否为 CSS 开启 source map。设置为 true 之后可能会影响构建的性能
        requireModuleExtension: true, // 去掉文件名中的 .module
        loaderOptions: { // 向 CSS 相关的 loader 传递选项
            sass: {
                additionalData: `
          @import "./src/assets/styles/_mixin.scss";
          @import "./src/assets/styles/_variable.scss";
         `
            }
        }
    },
    devServer: {
        host: '0.0.0.0', // 地址
        port: '9090', // 端口
        https: false, // 默认情况下，dev-server 通过 HTTP 提供服务。也可以选择带有 HTTPS 的 HTTP/2 提供服务
        open: true, // 是否运行时自动打开浏览器
        overlay: { // 让浏览器 overlay 同时显示警告和错误
            warnings: true,
            errors: true
        },
        proxy: { // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器
            '/api': {
                target: process.env.VUE_APP_API, // 代理地址
                changeOrigin: true, // 开启跨域
                secure: true, // https
                pathRewrite: {
                    '^/api': '/'
                }
            }
        }
    }
}
