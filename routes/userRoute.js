const route = require('express').Router()
const UserController = require('../controllers/UserController')

route
  .post('/login', UserController.getUser)
  .post('/register', UserController.createUserAdmin)

// route.put('/', UserController.createUserAdmin)

module.exports = route
