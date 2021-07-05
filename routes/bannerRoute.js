const route = require('express').Router()
const BannerController = require('../controllers/BannerController')

route.get('/', BannerController.fetchBanners)

route.post('/', BannerController.inputBanner)

route.put('/:id', BannerController.updateBanner)

route.delete('/:id', BannerController.deleteBanner)

module.exports = route
