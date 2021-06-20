const route = require('express').Router()
const WarehouseController = require('../controllers/WarehouseController')

route.get('/', WarehouseController.fetchImages)

route.post('/', WarehouseController.inputImage)

route.put('/:id', WarehouseController.updateImage)

route.delete('/:id', WarehouseController.deleteImage)

module.exports = route
