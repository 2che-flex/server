const route = require('express').Router()

const UserRoute = require('./userRoute')
const storyRoute = require('./storyRoute')
const bannerRoute = require('./bannerRoute')
const navbarRoute = require('./navbarRoute')
const clientRoute = require('./clientRoute')
const contactRoute = require('./contactRoute')
const categoryRoute = require('./categoryRoute')
const warehouseRoute = require('./warehouseRoute')
const socialMediaRoute = require('./socialMediaRoute')
const { authenticate } = require('../middlewares/Auth')

route.use(
  '/api/v1/', 
  UserRoute
);

route.use(
  '/api/v1/', 
  clientRoute
);

route.use(authenticate)

route.use(
  '/api/v1/',
  storyRoute,
);

route.use(
  '/api/v1/', 
  bannerRoute,
);

route.use(
  '/api/v1/',
  navbarRoute,
);

route.use(
  '/api/v1/',
  contactRoute,
);

route.use(
  '/api/v1/',
  categoryRoute,
);

route.use(
  '/api/v1/',
  socialMediaRoute,
);

route.use(
  '/api/v1/',
  warehouseRoute,
);

module.exports = route
