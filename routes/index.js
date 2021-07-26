const route = require('express').Router()
const UserRoute = require('./userRoute')
const storyRoute = require('./storyRoute')
const bannerRoute = require('./bannerRoute')
const navbarRoute = require('./navbarRoute')
const contactRoute = require('./contactRoute')
const categoryRoute = require('./categoryRoute')
const warehouseRoute = require('./warehouseRoute')
const socialMediaRoute = require('./socialMediaRoute')

route.use(
  '/api/v1/', 
  UserRoute,  
  storyRoute,
  bannerRoute,
  navbarRoute,
  contactRoute,
  categoryRoute,
  socialMediaRoute,
  warehouseRoute,
  );

module.exports = route
