const express = require('express')
const logger = require('./logger')
const process = require('process')
const setup = require('./setupMiddleware')
const devMiddleWare = require('../internals/webpack/webpack.dev.config')

const port = parseInt(process.argv[2]) || 3000

const app = express()

setup(app, devMiddleWare)

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz' // eslint-disable-line
  res.set('Content-Encoding', 'gzip')
  next()
})

// Start your app.
app.listen(port, '127.0.0.1', async err => {
  if (err) {
    return logger.error(err.message)
  }
  logger.appStarted(port, 'localhost')
})
