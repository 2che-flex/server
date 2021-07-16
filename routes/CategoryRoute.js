const route = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

// !Use method chaining
route
  .get('/category/:id', CategoryController.fetchWorksByCategory)
  .post('/category/', CategoryController.inputCategory)
  .delete('/category/:id', CategoryController.deleteCategory)

module.exports = route
