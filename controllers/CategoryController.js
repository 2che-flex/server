// const includes = require('lodash.includes');
const { Warehouse, Category } = require('../models/')

class CategoryController {

  static async fetchWorksByCategory(req, res, next) {
    const { id } = req.params
    try {
      const items = await Category.findByPk(id,
        {
          include: {
            as: 'Works',
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

  static async fetchCategories(req, res, next) {
    try {
      const categories = await Category.findAll({
        order: [
          ['name', 'ASC'],
        ]
      })

      res.status(201).json({ categories })

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

  static async updateCategory(req, res, next) {
    const { id } = req.params
    const { name } = req.body
    try {
     await Category.update({ name }, { where: { id } }) 

     res.status(200).json({ message : 'Successfully update category' })
    } catch (error) {
      next(error)
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
