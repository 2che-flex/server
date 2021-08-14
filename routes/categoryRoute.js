const route = require('express').Router()
const CategoryController = require('../controllers/CategoryController')

/// !Use method chaining
route
  .get('/category', CategoryController.fetchCategories)
  .get('/category/:id', CategoryController.fetchWorksByCategory)
  .put('/category/:id', CategoryController.updateCategory)
  .post('/category/', CategoryController.inputCategory)
  .delete('/category/:id', CategoryController.deleteCategory)

module.exports = route
