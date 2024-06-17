const { logger } = require('./src/logger')

require('dotenv').config()
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const morgan = require('morgan')
const cors = require('cors')

// Import options
const { authOptions, collabOptions, problemOptions, socketOptions } = require('./src')

const app = express()
const port = process.env.PORT || 5000

// Logging
app.use(morgan('combined'))

// Cors
app.use(cors())

// Default route
app.get('/', (req, res) => {
  return res.send('Hello World')
})

// Use gateway
app.use('/storage', createProxyMiddleware(authOptions))
app.use('/api/v1/auth', createProxyMiddleware(authOptions))
app.use('/api/v1/user', createProxyMiddleware(authOptions))
app.use('/api/v1/problems', createProxyMiddleware(problemOptions))
app.use('/api/v1/competes', createProxyMiddleware(problemOptions))
app.use('/api/v1/compete-problems', createProxyMiddleware(problemOptions))
app.use('/api/v1/materials', createProxyMiddleware(problemOptions))
app.use('/socket', createProxyMiddleware(socketOptions))
app.use('/', createProxyMiddleware(collabOptions))

// Start server
app.listen(port, () => {
  logger.info(`Gateway is running on port ${port}`)
})
