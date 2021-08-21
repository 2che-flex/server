if (["development", "test"].includes(process.env.NODE_ENV)) {
  require("dotenv").config();
}

const express = require('express')
const cors = require("cors");

const route = require('./routes/')
const errHandler = require('./middlewares/ErrorHanddler')

const app = express()

app.use(cors())
app.use(express.urlencoded({ extended: true, limit: '50mb', parameterLimit: 50000  }))
app.use(express.json({limit: '50mb'}))

app.use(route)
app.use(errHandler)

module.exports= app
