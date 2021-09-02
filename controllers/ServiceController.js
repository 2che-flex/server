const { Service } = require('../models')

class ServiceController {
  static async fetchServices(req, res, next) {
    try {
      const texts = await Service.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })

      res.status(200).json({ texts })
      
    } catch (error) {
      next(error);
    }
  }

  static async inputService(req, res, next) {
    const { textHtml } = req.body
    try {
      const dataService = await Service.create({ textHtml })

      res.status(201).json(dataService)

    } catch (error) {
      next(error);
    }
  }

  static async getServiceId(req, res, next) {
    const { id } = req.params
    try {
      const dataService = await Service.findByPk(id)

      res.status(200).json(dataService)

    } catch (error) {
      next(error);
    }
  }

  static async updateService(req, res, next) {
    const { textHtml } = req.body
    const { id } = req.params
    try {

      await Service.update({ textHtml }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data Service' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteService(req, res, next) {
    const { id } = req.params
    try {

      await Service.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data Service' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = ServiceController
