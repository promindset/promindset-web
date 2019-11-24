const chalk = require('chalk')

const logger = {
  error: err => {
    console.error(chalk.red(err))
  },

  appStarted: (port, host) => {
    console.log(`
        ${chalk.white('\t\tServer started')} ${chalk.green('✓')}\n
        ${chalk.gray('------------------------------------------------')}\n
        ${chalk.bold('Server Url: ')}${chalk.magenta(`http://${host}:${port}`)}
        ${chalk.blue(`Press ${chalk.italic('CTRL-C')} to stop`)}\n
    `)
  }
}

module.exports = logger
