const express = require("express")
const logger = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const path = require('path')
const Project = require('./models/Project')
const MongoClient = require('mongodb').MongoClient

// Create instances
const app = express()
const router = express.Router()

// if(process.env.NODE_ENV === 'production') {
//   app.use(express.static('client/build'))
// }
//
// if (process.env.NODE_ENV !== 'production') {
//   dotenv.load();
// }
app.use(express.static('client/build'))
dotenv.load()

const url = process.env.MONGODB_URI || "mongodb://localhost:27017/ngreendesigns"

//> Set our port to either a predetermined port number if you have set it up, or 3001
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false, }))
app.use(bodyParser.json());
app.use(logger('dev'));

// routes(router)
//> Set route path
router.get('/', (req, res) => {
  res.json({ message: 'Hello World' })
})

router.get('http://localhost:3000/projects', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    if (err) return err
    const db = client.db('portfolio')
    const projection = { "_id": 0 }
    //> cursor for database
    var cursor = db.collection('project_information').find({}, projection).sort({ '_id': -1 })
    //> Array for project information
    var projectArray = []
    cursor.forEach((doc, err) => {
      projectArray.push(doc)
    }, () => {
      client.close()
      return res.json({ success: true, data: projectArray })
      }) //> render
  })
})

router.get('/:id', (req, res) => {
  MongoClient.connect(url, (err, client) => {
    if (err) return err
    const db = client.db('portfolio')
    const projection = { "_id": 0 }
    //> cursor for database
    var cursor = db.collection('project_information').find({ uri_name: req.params.id }, projection).sort({ '_id': -1 })
    //> Array for project information
    var projectArray = []
    cursor.forEach((doc, err) => {
      projectArray.push(doc)
    }, () => {
      client.close()
      return res.json({ success: true, data: projectArray })
      }) //> render
  })
})


//> Use our router configuration when we call /api
app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(PORT, () => {
  console.log(`Now connected on port ${PORT}`)
})
