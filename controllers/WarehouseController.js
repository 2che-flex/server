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
    const { title, description, video_url, CategoryId, imageData } = req.body
    try {
      const item = await Warehouse.create({ title, description, video_url, CategoryId, imageData })

      res.status(201).json(item)

    } catch (error) {
      next(error);
    }
  }

  static async getImageByPk(req, res, next) {
    const { id } = req.params
    try {
      const item = await Warehouse.findByPk(id)

      res.status(200).json(item)
    } catch (error) {
      next(error);
    }
  }

  static async updateImage(req, res, next) {
    const { title, description, video_url, CategoryId, imageData } = req.body
    const { id } = req.params
    try {

      await Warehouse.update({ title, description, video_url, CategoryId, imageData }, { where: { id } })

      res.status(200).json({ message: 'Successfully update imageData' })

    } catch (error) {
      next(error);
    }
  }

  static async deleteImage(req, res, next) {
    const { id } = req.params
    try {

      await Warehouse.destroy({ where: { id } })

      res.status(200).json({ message: 'Successfully delete imageData' })

    } catch (error) {
      next(error);
    }
  }

}

module.exports = WarehouseControllers
