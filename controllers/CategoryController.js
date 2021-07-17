// const includes = require('lodash.includes');
const { Warehouse, Category } = require('../models/')

class CategoryController {

  static async fetchWorksByCategory(req, res, next) {
    const { id } = req.params
    try {
      const items = await Category.findByPk(id,
        {
          include: {
            model: Warehouse,
            separate: true,
            order: [['id', 'DESC']]
          }
        })
      res.status(200).json(items)
      
    } catch (error) {
      next(error);
    }
  }

  static async inputCategory(req, res, next) {
    const { name } = req.body
    try {
      const item = await Category.create({ name })

      res.status(201).json(item)

    } catch (error) {
      next(error);
    }
  }

  static async deleteCategory(req, res, next) {
    const { id } = req.params
    try {

      await Category.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete Category' })
      
    } catch (error) {
      next(error);      
    }
  }

}

module.exports = CategoryController
