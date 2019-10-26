const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
// 引入基本配置
var config = require('./webpack.config');

config.mode = 'development';
//前端虚拟服务
config.devServer = {
  hot: true, // 热替换
  contentBase: path.join(__dirname, 'dist'), // server文件的根目录
  compress: true, // 开启gzip
  port: 8080, // 端口
  open: true,
  // proxy: {
  //   // 代理到后端的服务地址，会拦截所有以api开头的请求地址
  //   "/api": "http://localhost:3000"
  // }
};
//缓存模块, 避免在未更改时重建它们
config.cache = true;
//动态生成html
config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new HtmlWebPackPlugin({
    template: './src/index.html',
    // favicon: './src/assets/images/favicon.ico',
    filename: path.resolve(__dirname, '../dist/index.html'),
    inject: true,
    hash: true,
    cache: false,
    showErrors: true,
    minify:{    //压缩HTML文件
      removeComments:false,    //移除HTML中的注释
      collapseWhitespace:false    //删除空白符与换行符
    }
  })
);
//创建静态文件定位map
config.devtool="cheap-module-eval-source-map";

module.exports = config;
