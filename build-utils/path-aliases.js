const path = require("path")

const CLIENT_ROOT = path.resolve(__dirname, "..", "src", "client")
const SERVER_ROOT = path.resolve(__dirname, "..", "src", "server")
const STATIC_ROOT = path.resolve(__dirname, "..", "src", "client", "static")

const aliases = [
  { alias: "@component", path: path.join(CLIENT_ROOT, "components") },
  { alias: "@views", path: path.join(CLIENT_ROOT, "components") },
  { alias: "@hooks", path: path.join(CLIENT_ROOT, "components") },
  { alias: "@middleware", path: path.join(SERVER_ROOT, "middleware") },
]

module.exports.aliases = aliases
module.exports.CLIENT_ROOT = CLIENT_ROOT
module.exports.SERVER_ROOT = SERVER_ROOT
module.exports.STATIC_ROOT = STATIC_ROOT
