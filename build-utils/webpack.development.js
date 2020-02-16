const path = require("path")
const { CLIENT_ROOT } = require("./path-aliases")

module.exports = () => ({
  // FIXME: relative to client root
  devtool: "source-map",
  context: path.resolve(CLIENT_ROOT),
  entry: {
    main: ["@babel/polyfill", "react-hot-loader/patch", "./index.js"],
  },

  output: {
    path: `${CLIENT_ROOT}/static/`,
    publicPath: "/static/",
    filename: "[name].js",
  },
  resolve: {
    modules: [CLIENT_ROOT, "node_modules"],
    extensions: [".mjs", ".js"],
  },
  devServer: {
    overlay: true,
  },
})
