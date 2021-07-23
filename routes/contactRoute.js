const route = require('express').Router()
const ContactController = require('../controllers/ContactController')

// !Use method chaining
route
  .get('/contact', ContactController.fetchClients)
  .post('/contact', ContactController.inputClient)
  .get('/contact/:id', ContactController.getClientId)
  .put('/contact/:id', ContactController.updateClient)
  .delete('/contact/:id', ContactController.deleteClient)

module.exports = route
