const Router = require("koa-router")

const DEV_MODE = process.env.NODE_ENV || "production"
const { API_URL, LANDING_URL, WEB_SOCKET_URL } = process.env
// const { ACCESS_TOKEN_COOKIE_NAME } = require('../constants');

const indexRouter = new Router()

indexRouter.get("/health", async ctx => {
  ctx.status = 200
})

// match all routes but not files (i.e. routes with dots)
indexRouter.get(/^((?!\.).)*$/, async ctx => {
  // if (!ctx.cookies.get(ACCESS_TOKEN_COOKIE_NAME)) {
  //   ctx.redirect(config.landingLoginUrl);
  // }

  return ctx.render(DEV_MODE ? "index-template" : "index", {
    isDev: DEV_MODE,
    config: {
      API_URL,
      LANDING_URL,
      WEB_SOCKET_URL,
    },
  })
})

module.exports = indexRouter.routes()
