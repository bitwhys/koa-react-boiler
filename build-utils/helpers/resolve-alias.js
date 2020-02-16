const chalk = require("chalk")

/**
 *
 * @param {{alias: string, path: string}[]} aliases Array
 */
module.exports = aliases => {
  console.log(chalk.bold.yellow(aliases))
  return aliases.reduce(
    (config, current) => {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias[current.alias] = current.path
      return config
    },
    { resolve: { alias: {} } }
  )
}
