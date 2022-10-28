require('dotenv').config()

const express = require('express')

const app = express()
const port = process.env.PORT || 3000

// Default route
app.get('/', (req, res) => {
  return res.send('Hello World')
})

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
