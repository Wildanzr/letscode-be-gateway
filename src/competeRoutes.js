const { logger } = require('./logger')
const PROBLEM = process.env.PROBLEM_URL || 'http://localhost:5003'

logger.info(`PROBLEM_URL: ${PROBLEM}`)

const competeOptions = {
  target: PROBLEM, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  competeOptions
}
