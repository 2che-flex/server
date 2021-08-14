const route = require('express').Router()
const StoryController = require('../controllers/StoryController')

// !Use method chaining
route
  .post('/story', StoryController.inputStory)
  .get('/story/:id', StoryController.getStoryId)
  .put('/story/:id', StoryController.updateStory)
  .delete('/story/:id', StoryController.deleteStory)

module.exports = route
