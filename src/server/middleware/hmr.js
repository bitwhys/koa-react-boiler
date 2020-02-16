const chalk = require("chalk")
const path = require("path")
const webpack = require("webpack")
const koaWebpack = require("koa-webpack")
const getWebpackConfig = require("../../../webpack.config")

const config = getWebpackConfig({ mode: "development" })

module.exports = async app => {
  // workaround for docker containers
  const host = process.env.HRM_HOST || "localhost"
  const middleware = await koaWebpack({
    compiler: webpack(config),
    hotClient: {
      host,
      port: 8081,
    },
    devMiddleware: {
      publicPath: config.output.publicPath,
    },
  })
  app.use(middleware)
  app.use(async ctx => {
    const filename = path.resolve(config.output.path, "index.html")
    ctx.response.type = "html"
    ctx.response.body = middleware.devMiddleware.fileSystem.createReadStream(
      filename
    )
  })
}
