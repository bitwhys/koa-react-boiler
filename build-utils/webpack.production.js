const path = require("path")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const { CLIENT_ROOT } = require("./path-aliases")

module.exports = () => ({
  context: path.resolve(CLIENT_ROOT),
  entry: {
    main: ["@babel/polyfill", "./index.js"],
  },

  output: {
    path: `${CLIENT_ROOT}/static/`,
    publicPath: "/static/",
    filename: "main.[hash].js",
    chunkFilename: "main.[id].[hash].js",
  },

  devtool: "eval",

  resolve: {
    modules: [CLIENT_ROOT, "node_modules"],
    extensions: [".mjs", ".js"],
  },

  optimization: {
    minimize: true,
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "main.[hash].css",
      chunkFilename: "main.[id].[hash].css",
    }),
  ],
})
