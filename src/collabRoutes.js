const COLLABORATION = process.env.COLLABORATION_URL

console.log('COLLABORATION_URL: ', COLLABORATION)
const collabOptions = {
  target: COLLABORATION, // target host
  changeOrigin: true, // needed for virtual hosted sites,
  ws: true
}

module.exports = {
  collabOptions
}
