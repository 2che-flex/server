const route = require('express').Router()
const HeroSectionController = require('../controllers/HeroSectionController')

route.get('/', HeroSectionController.fetchBanners)

route.post('/', HeroSectionController.inputBanner)

route.put('/:id', HeroSectionController.updateBanner)

route.delete('/:id', HeroSectionController.deleteBanner)

module.exports = route
