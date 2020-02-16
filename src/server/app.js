const chalk = require("chalk")
const path = require("path")
const Koa = require("koa")
require("dotenv").config({ path: path.resolve(__dirname, "..", "..", ".env") })
const setupServer = require("./server-setup")

const PORT = process.env.PORT || 3008
process.env.NODE_ENV = process.env.NODE_ENV || "production"
global.logger = require("./logger")

const { logger } = global
const app = new Koa()

setupServer(app).catch(e => console.error(e))
app.listen(PORT, () => {
  logger.warn(
    `Web application server listening on ${PORT}, in ${process.env.NODE_ENV} mode`
  )
})

module.exports = app
