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

app.post('/register', (req,res) => {
  res.send({message: `Hello ${req.body.email}! Your user was registered. Have fun`})
})

const PORT = process.env.PORT || 8081// eslint-disable-line

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
}) 