const path = require('path')

module.exports = options => ({
  mode: options.mode,

  entry: options.entry,

  output: Object.assign(
    {
      path: path.resolve(process.cwd(), 'build'),
      publicPath: '/'
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
      },
      {
        test: /\.(ts|tsx)$/,
        loader: 'ts-loader'
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
      //   {
      //     // Preprocess our own .css files
      //     // This is the place to add your own loaders (e.g. sass/less etc.)
      //     // for a list of loaders, see https://webpack.js.org/loaders/#styling
      //     test: /\.css$/,
      //     exclude: /node_modules/,
      //     use: ['style-loader', 'css-loader']
      //   },
      //   {
      //     // Preprocess 3rd party .css files located in node_modules
      //     test: /\.css$/,
      //     include: /node_modules/,
      //     use: ['style-loader', 'css-loader']
      //   },
      //   {
      //     test: /\.(eot|otf|ttf|woff|woff2)$/,
      //     use: 'file-loader'
      //   },
      //   {
      //     test: /\.svg$/,
      //     use: [
      //       {
      //         loader: 'svg-url-loader',
      //         options: {
      //           // Inline files smaller than 10 kB
      //           limit: 10 * 1024,
      //           noquotes: true
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     test: /\.(jpg|png|gif)$/,
      //     use: [
      //       {
      //         loader: 'url-loader',
      //         options: {
      //           // Inline files smaller than 10 kB
      //           limit: 10 * 1024
      //         }
      //       },
      //       {
      //         loader: 'image-webpack-loader',
      //         options: {
      //           mozjpeg: {
      //             enabled: false
      //             // NOTE: mozjpeg is disabled as it causes errors in some Linux environments
      //             // Try enabling it in your environment by switching the config to:
      //             // enabled: true,
      //             // progressive: true,
      //           },
      //           gifsicle: {
      //             interlaced: false
      //           },
      //           optipng: {
      //             optimizationLevel: 7
      //           },
      //           pngquant: {
      //             quality: '65-90',
      //             speed: 4
      //           }
      //         }
      //       }
      //     ]
      //   },
      //   {
      //     test: /\.(mp4|webm)$/,
      //     use: {
      //       loader: 'url-loader',
      //       options: {
      //         limit: 10000
      //       }
      //     }
      //   }
    ]
  },
  plugins: options.plugins,

  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    mainFields: ['browser', 'jsnext:main', 'main']
  },

  devtool: options.devtool,

  target: 'web',

  performance: options.performance || {}
})
