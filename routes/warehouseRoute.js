const route = require('express').Router()
const WarehouseController = require('../controllers/WarehouseController')

// !Use method chaining
route
  .get('/', WarehouseController.fetchImages)
  .post('/', WarehouseController.inputImage)
  .get('/:id', WarehouseController.getImageByPk)
  .put('/:id', WarehouseController.updateImage)
  .delete('/:id', WarehouseController.deleteImage)

module.exports = route
