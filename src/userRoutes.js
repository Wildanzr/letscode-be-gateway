const AUTH = process.env.AUTH_URL

console.log('USER_URL: ', AUTH)

const userOptions = {
  target: AUTH, // target host
  changeOrigin: true // needed for virtual hosted sites
}

module.exports = {
  userOptions
}
