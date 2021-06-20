const route = require('express').Router()
const UserRoute = require('./userRoute')
const warehouseRoute = require('./warehouseRoute')

route.use('/', UserRoute)

route.use('/image', warehouseRoute)

module.exports = route
