const { fetchBanners } = require('../controllers/BannerController')
const { fetchCategories, fetchWorksByCategory } = require('../controllers/CategoryController')
const { fetchContacts } = require('../controllers/ContactController')
const { fetchNavbars } = require('../controllers/CustomNavbarController')
const { fetchSocialMedia } = require('../controllers/SocialMediaController')
const { fetchStorys } = require('../controllers/StoryController')
const { fetchImages } = require('../controllers/WarehouseController')
const StoryController = require('../controllers/StoryController')

const route = require('express').Router()

route
  .get('/story', fetchStorys)
  .get('/banner/', fetchBanners)
  .get('/navbar/', fetchNavbars)
  .get('/contact', fetchContacts)
  .get('/category', fetchCategories)
  .get('/category/:id', fetchWorksByCategory)
  .get('/footer/', fetchSocialMedia)
  .get('/story/:id', StoryController.getStoryId)
  .get('/', fetchImages)
  

module.exports = route
