const route = require('express').Router()
const StoryController = require('../controllers/StoryController')

// !Use method chaining
route
  .post('/story', StoryController.inputStory)
  .put('/story/:id', StoryController.updateStory)
  .delete('/story/:id', StoryController.deleteStory)

module.exports = route
