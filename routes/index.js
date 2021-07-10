const route = require('express').Router()
const UserRoute = require('./userRoute')
const warehouseRoute = require('./warehouseRoute')
const bannerRoute = require('./bannerRoute')
const clientRoute = require('./clientRoute')

route.use(
  '/api/v1/', 
  // UserRoute,  
  // bannerRoute, 
  clientRoute, 
  // warehouseRoute,
  );

module.exports = route
