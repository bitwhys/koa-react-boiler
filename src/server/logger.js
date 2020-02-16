const { createConsoleLogger } = require("@paralect/common-logger")

const DEV_MODE = process.env.NODE_ENV !== "production"

module.exports = createConsoleLogger({
  isDev: DEV_MODE,
})
