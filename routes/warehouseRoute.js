const route = require('express').Router()
const WarehouseController = require('../controllers/WarehouseController')

route.get('/', WarehouseController.fetchImages)

route.post('/', WarehouseController.inputImage)

route.put('/', WarehouseController.updateImage)

route.delete('/', WarehouseController.deleteImage)

module.exports = route
