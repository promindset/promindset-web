const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = require('./webpack.base.config')({
  mode: 'development',

  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'app/index.js')
  ],

  output: {
    filename: '[name].js',
    chunkFilename: '[name]-chunk.js'
  },

  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            const packageName = module.context.match(
              /[\\/]node_modules[\\/](.*?)([\\/]|$)/
            )[1]
            // npm package names are URL-safe, but some servers don't like @ symbols
            return `npm.${packageName.replace('@', '')}`
          }
        }
      }
    }
  },

  // Add development plugins
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
      template: 'app/index.html'
    })
  ],

  devtool: 'eval-source-map',

  performance: {
    hints: false
  }
})
