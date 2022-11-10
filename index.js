require('dotenv').config()
const express = require('express')
const { createProxyMiddleware } = require('http-proxy-middleware')
const morgan = require('morgan')
const cors = require('cors')

// Import options
const { authOptions, userOptions, collabOptions } = require('./src')

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
app.use('/api/v1/auth', createProxyMiddleware(authOptions))
app.use('/api/v1/user', createProxyMiddleware(userOptions))
app.use('/', createProxyMiddleware(collabOptions))

// Start server
app.listen(port, () => {
  console.log(`Gateway is running on port ${port}`)
})
