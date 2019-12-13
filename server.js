const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

// List user routes
const getUser = require('./Routes/getUser')

// For receive body request from frontend
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/users', getUser)


let cb = () => {
    console.log(`Server running on `, port)
}

app.listen(port, cb)