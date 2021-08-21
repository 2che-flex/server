const route = require('express').Router()
const CategoryController = require('../controllers/CategoryController')
const { authenticate } = require('../middlewares/Auth')

/// !Use method chaining
route
  .put('/category/:id', CategoryController.updateCategory)
  .post('/category/', CategoryController.inputCategory)
  .delete('/category/:id', CategoryController.deleteCategory)

module.exports = route
