const path = require('path');
const webpack = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
// 引入基本配置
var config = require('./webpack.config');

config.mode = 'production';
//动态生成html
config.plugins.push(
  // 配置 PWA
  new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
  }),
  new CleanWebpackPlugin(),
  new HtmlWebPackPlugin({
    template: 'src/index.html',
    // favicon: './src/assets/images/favicon.ico',
    filename: 'index.html',
    inject: true,
    hash: true,
    cache: true,
    showErrors: false,
    minify:{    //压缩HTML文件
      removeComments:true,    //移除HTML中的注释
      collapseWhitespace:true    //删除空白符与换行符
    }
  })
);
//创建静态文件定位map
config.devtool="cheap-module-source-map";

module.exports = config;
