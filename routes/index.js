const route = require('express').Router()
const UserRoute = require('./userRoute')
const warehouseRoute = require('./warehouseRoute')
const bannerRoute = require('./bannerRoute')

route.use('/api/v1/', UserRoute)

route.use('/api/v1/', warehouseRoute)

route.use('/api/v1/banner/', bannerRoute)

module.exports = route
