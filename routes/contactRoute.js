const route = require('express').Router()
const ContactController = require('../controllers/ContactController')

// !Use method chaining
route
  .get('/contact', ContactController.fetchContacts)
  .post('/contact', ContactController.inputContact)
  .get('/contact/:id', ContactController.getContactId)
  .put('/contact/:id', ContactController.updateContact)
  .delete('/contact/:id', ContactController.deleteContact)

module.exports = route
