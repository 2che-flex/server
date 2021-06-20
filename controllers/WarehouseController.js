const { Warehouse } = require('../models/')

class WarehouseControllers {

  static async fetchImages(req, res, next) {
    try {
      const images = await Warehouse.findAll()
      res.status(200).json({images})
      
    } catch (error) {
      next(error);
    }
  }

  static async inputImage(req, res, next) {
    const { title, discription, url } = req.body
    try {
      const image = await Warehouse.create()

      res.status(201).json(image)

    } catch (error) {
      next(error);
    }

  }

  static async updateImage(req, res, next) {
    const { title, name, url } = req.body
    const { id } = req.params
    try {

      await Warehouse.update({ title, name, url }, { where: { id } })

      res.status(200).json({ message : 'Successfully update image' })
      
    } catch (error) {
      next(error);    
    }

  }

  static async deleteImage(req, res, next) {
    const { id } = req.params
    try {

      await Warehouse.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete image' })
      
    } catch (error) {
      next(error);      
    }

  }

}

module.exports = WarehouseControllers