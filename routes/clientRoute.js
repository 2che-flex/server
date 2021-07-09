const route = require('express').Router()
const ClientController = require('../controllers/ClientController')

route
  .get('/client', ClientController.fetchClients)
  .post('/client', ClientController.inputClient)
  .get('/client/:id', ClientController.getClientId)
  .put('/client/:id', ClientController.updateClient)
  .delete('/client/:id', ClientController.deleteClient)

module.exports = route
