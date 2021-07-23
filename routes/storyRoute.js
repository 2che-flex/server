const route = require('express').Router()
const ContactController = require('../controllers/ContactController')

// !Use method chaining
route
  .get('/story', ContactController.fetchClients)
  .post('/story', ContactController.inputClient)
  .get('/story/:id', ContactController.getClientId)
  .put('/story/:id', ContactController.updateClient)
  .delete('/story/:id', ContactController.deleteClient)

module.exports = route
