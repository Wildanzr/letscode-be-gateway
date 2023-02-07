const PROBLEM = process.env.PROBLEM_URL

console.log('COMPETE_URL: ', PROBLEM)

const competeOptions = {
  target: PROBLEM, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  competeOptions
}
