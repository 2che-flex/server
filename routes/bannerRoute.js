const route = require('express').Router()
const BannerController = require('../controllers/BannerController')

// !Use method chaining
route
  .post('/banner/', BannerController.inputBanner)
  .get('/banner/:id', BannerController.getBannerId)
  .put('/banner/:id', BannerController.updateBanner)
  .delete('/banner/:id', BannerController.deleteBanner)

module.exports = route
