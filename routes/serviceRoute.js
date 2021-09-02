const route = require('express').Router()
const ServiceController = require('../controllers/ServiceController')

// !Use method chaining
route
  .post('/services', ServiceController.inputService)
  .put('/services/:id', ServiceController.updateService)
  .delete('/services/:id', ServiceController.deleteService)

module.exports = route
