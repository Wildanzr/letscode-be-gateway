const AUTH = process.env.AUTH_URL

console.log('AUTH_URL: ', AUTH)

const authOptions = {
  target: AUTH, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  authOptions
}
