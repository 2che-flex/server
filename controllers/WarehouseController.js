const { Warehouse } = require('../models/')

class WarehouseControllers {

  static async fetchImages(req, res, next) {
    try {
      const items = await Warehouse.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })
      res.status(200).json({ items })
      
    } catch (error) {
      next(error);
    }
  }

  static async inputImage(req, res, next) {
    const { title, discription, url, type } = req.body
    try {
      const image = await Warehouse.create({ title, discription, url, type })

      res.status(201).json(image)

    } catch (error) {
      next(error);
    }
  }

  static async updateImage(req, res, next) {
    const { title, discription, url, type } = req.body
    const { id } = req.params
    try {

      await Warehouse.update({ title, discription, url, type }, { where: { id } })

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
