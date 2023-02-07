const PROBLEM = process.env.PROBLEM_URL

console.log('PROBLEM_URL: ', PROBLEM)
const problemOptions = {
  target: PROBLEM, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  problemOptions
}
