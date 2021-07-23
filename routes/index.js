const route = require('express').Router()
const UserRoute = require('./userRoute')
const warehouseRoute = require('./warehouseRoute')
const bannerRoute = require('./bannerRoute')
const contactRoute = require('./contactRoute')
const categoryRoute = require('./categoryRoute')

route.use(
  '/api/v1/', 
  UserRoute,  
  bannerRoute, 
  contactRoute,
  categoryRoute,
  warehouseRoute,
  );

module.exports = route
