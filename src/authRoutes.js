const { logger } = require('./logger')

const AUTH = process.env.AUTH_URL || 'http://localhost:5001'

logger.info(`AUTH_URL: ${AUTH}`)

const authOptions = {
  target: AUTH, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  authOptions
}
