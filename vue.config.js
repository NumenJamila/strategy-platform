// module.exports = {
//   css: {
//     loaderOptions: { // 向 CSS 相关的 loader 传递选项
//       less: {
//         javascriptEnabled: true
//       }
//     }
//   }
// }
const moment = require('moment');
const path = require('path');

const buildDate = moment().format('YYYYMMDDhhmmss');

module.exports = {
  publicPath: './',
  productionSourceMap: false,
  css: {
    extract: {
      filename: `css/[name].${buildDate}.css`,
      chunkFilename: `css/[name].${buildDate}.css`,
    },
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: {
    output: {
      filename: `js/[name].${buildDate}.js`,
      chunkFilename: `js/[name].${buildDate}.js`,
    },
  },
  devServer: {
    port: 3888,
    open: true,
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          resources: path.resolve(__dirname, './src/assets/styles/variables.scss'),
        })
        .end()
    })
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {
      colors: true
    },
    proxy: {
      // 匹配代理的url
      '/api': {
        // 目标服务器地址
        // target: 'http://118.24.195.20/hzy',
        target: 'http://192.168.1.135:8090/zlzy',
        // target: 'http://mxo.mobi/hzy',
        secure: false,
        // 路径重写
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  }
}