const { createConsoleLogger } = require("@paralect/common-logger")

const DEV_MODE = process.env.NODE_ENV || "development"

module.exports = createConsoleLogger({
  isDev: DEV_MODE,
})
