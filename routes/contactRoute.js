const route = require('express').Router()
const ContactController = require('../controllers/ContactController')

// !Use method chaining
route
  .post('/contact', ContactController.inputContact)
  .get('/contact/:id', ContactController.getContactId)
  .put('/contact/:id', ContactController.updateContact)
  .delete('/contact/:id', ContactController.deleteContact)

module.exports = route
