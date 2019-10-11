const merge = require('webpack-merge')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common.js')
const webpack = require('webpack')

module.exports = merge(common, {
  plugins: [
    new webpack.DefinePlugin ({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new HtmlWebpackPlugin ({
      title: 'Production Title',
      template:path.join(__dirname, '/public/index.html'),
      inject: 'body'
    })
  ]  
})