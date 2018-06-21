const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const app = express()

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'))
}

if (process.env.NODE_ENV !== 'production') {
  dotenv.load()
}

const PORT = process.env.PORT || 3001

app.use(bodyParser.urlencoded({
  extended: true,
}))

app.use(require('./routes/apiRoutes.js'))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(POST, () => {
  console.log(`Now connected on post ${PORT}`)
})
