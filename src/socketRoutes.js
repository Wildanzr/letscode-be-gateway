const { logger } = require('./logger')

const SOCKET = process.env.SOCKET_URL || 'http://localhost:1234'

logger.info(`SOCKET_URL: ${SOCKET}`)

const socketOptions = {
  target: SOCKET, // target host
  changeOrigin: true, // needed for virtual hosted sites
  ws: true,
  pathRewrite: {
    '^/socket': ''
  }
}

module.exports = {
  socketOptions
}
