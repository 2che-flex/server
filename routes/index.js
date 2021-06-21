const route = require('express').Router()
const UserRoute = require('./userRoute')
const warehouseRoute = require('./warehouseRoute')

route.use('/', UserRoute)

route.use('/items', warehouseRoute)

module.exports = route
