const { logger } = require('./logger')
const COLLABORATION = process.env.COLLABORATION_URL || 'http://localhost:5002'

logger.info(`COLLABORATION_URL: ${COLLABORATION}`)
const collabOptions = {
  target: COLLABORATION, // target host
  changeOrigin: true, // needed for virtual hosted sites,
  ws: true
}

module.exports = {
  collabOptions
}
