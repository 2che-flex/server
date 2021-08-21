const route = require('express').Router()
const SocialMediaController = require('../controllers/SocialMediaController')

// !Use method chaining
route
  .post('/footer/', SocialMediaController.inputSocialMedia)
  .get('/footer/:id', SocialMediaController.getSocialMediaId)
  .put('/footer/:id', SocialMediaController.updateSocialMedia)
  .delete('/footer/:id', SocialMediaController.deleteSocialMedia)

module.exports = route
