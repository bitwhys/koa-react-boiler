const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { loadPresets } = require("./build-utils")
const { CLIENT_ROOT } = require("./build-utils/path-aliases")

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  const modeConfig = mode => require(`./build-utils/webpack.${mode}`)(mode)
  return webpackMerge(
    {
      mode,
      plugins: [
        new HtmlWebpackPlugin({
          template: path.join(CLIENT_ROOT, "views/index-template.html"),
          filename: "index.html",
          inject: "body",
        }),
      ],
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader",
          },
          {
            test: /\.(png|jpe?g|gif|woff|woff2|ttf|eot|ico)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: ["url-loader?limit=5000&name=[name].[hash].[ext]?"],
          },
        ],
      },
    },
    modeConfig(mode),
    loadPresets({ mode, presets })
  )
}
