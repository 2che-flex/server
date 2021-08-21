const route = require('express').Router()
const UserController = require('../controllers/UserController')

// !Use method chaining
route
  .post('/login', UserController.getUser)
  .post('/register', UserController.createUserAdmin)

//.put('/', UserController.createUserAdmin)

module.exports = route
