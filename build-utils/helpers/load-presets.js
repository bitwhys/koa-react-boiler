const webpackMerge = require("webpack-merge")

const applyPresets = (env = { presets: [] }) => {
  const { presets = [] } = env
  /** @type {string[]} */
  const mergedPresets = [].concat(...[presets])
  const mergedConfigs = mergedPresets.map(presetName =>
    require(`./presets/webpack.${presetName}`)()
  )
  return webpackMerge({}, ...mergedConfigs)
}

module.exports = applyPresets
