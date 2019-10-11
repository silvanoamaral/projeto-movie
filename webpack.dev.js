const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    contentBase: './dist',
    historyApiFallback: true,
    port: 8000,
    proxy: {
      '/api': {
        target: 'http://localhost:5001',
      }
    }
  },
  plugins: [
    new HtmlWebpackPlugin ({
      title: 'development Title',
      template:path.join(__dirname, '/public/index.html'),
      inject: true
    })
  ]
})