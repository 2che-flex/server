const route = require('express').Router()
const NavbarController = require('../controllers/CustomNavbarController')

// !Use method chaining
route
  .post('/navbar/', NavbarController.inputNavbar)
  .get('/navbar/:id', NavbarController.getNavbarId)
  .put('/navbar/:id', NavbarController.updateNavbar)
  .delete('/navbar/:id', NavbarController.deleteNavbar)

module.exports = route
