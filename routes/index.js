const route = require('express').Router()
const UserRoute = require('./userRoute')
const storyRoute = require('./storyRoute')
const bannerRoute = require('./bannerRoute')
const contactRoute = require('./contactRoute')
const categoryRoute = require('./categoryRoute')
const warehouseRoute = require('./warehouseRoute')

route.use(
  '/api/v1/', 
  UserRoute,  
  storyRoute,
  bannerRoute,
  contactRoute,
  categoryRoute,
  warehouseRoute,
  );

module.exports = route
