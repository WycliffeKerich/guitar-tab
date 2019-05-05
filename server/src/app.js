const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

let app = express()

/* eslint-disable no-console */

// Middleware
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())

app.get('/status', (req,res) => {
  res.send({message: 'Hello World'})
})

const PORT = process.env.PORT || 8081// eslint-disable-line

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
}) 