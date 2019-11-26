const path = require('path')

module.exports = options => ({
  mode: options.mode,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: ''
    },
    options.output
  ),

  optimization: options.optimization,

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery
        }
      }
    ]
  },
  plugins: options.plugins,

  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.json'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },

  devtool: options.devtool,

  target: 'web',

  performance: options.performance || {}
})
