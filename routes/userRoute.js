const route = require('express').Router()
const UserController = require('../controllers/UserController')

route.get('/', UserController.getUser)

route.post('/', UserController.createUserAdmin)

module.exports = route
