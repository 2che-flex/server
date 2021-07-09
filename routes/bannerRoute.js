const route = require('express').Router()
const BannerController = require('../controllers/BannerController')

// !Use method chaining
route
  .get('/banner/', BannerController.fetchBanners)
  .post('/banner/', BannerController.inputBanner)
  .get('/banner/:id', BannerController.getBannerId)
  .put('/banner/:id', BannerController.updateBanner)
  .delete('/banner/:id', BannerController.deleteBanner)

module.exports = route
