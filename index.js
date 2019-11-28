const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const db = require('./config')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  app.get('/users', db.getUsers)
  app.post('/users', db.createUser)
  app.put('/users/:id', db.updateUser)

  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  }) 