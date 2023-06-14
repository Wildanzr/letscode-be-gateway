const { logger } = require('./logger')
const PROBLEM = process.env.PROBLEM_URL || 'http://localhost:5003'

logger.info(`PROBLEM_URL: ${PROBLEM}`)
const problemOptions = {
  target: PROBLEM, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  problemOptions
}
