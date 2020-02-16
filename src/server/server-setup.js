const path = require("path")
const requestLogger = require("koa-logger")
const serve = require("koa-static")
const mount = require("koa-mount")
const views = require("koa-views")

const DEV_MODE = process.env.NODE_ENV || "production"

const routes = require("./routes")

const { logger } = global

const pathToViews = path.join(__dirname, "./../../client/views")
const pathToStatic = path.join(__dirname, "./../../client/static")

module.exports = async app => {
  app.use(requestLogger())
  app.use(mount("/static", serve(pathToStatic)))
  app.use(views(DEV_MODE ? pathToViews : pathToStatic))

  if (DEV_MODE) {
    await require("./middleware/hmr")(app)
  }

  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (err) {
      logger.error(err)
      this.status = err.status || 500
      this.body = {
        errors: [{ _global: "An error has occurred" }],
      }
    }
  })

  app.use(routes)
}
