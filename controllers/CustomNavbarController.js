const { CustomNavbar, Warehouse } = require('../models')

class CustomNavbarControllers {

  static async fetchNavbarsByCategory(req, res, next) {
    const { id } = req.params
    try {
      const items = await CustomNavbar.findByPk(id,
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

  static async fetchNavbars(req, res, next) {
    try {
      const navbars = await CustomNavbar.findAll({
        order: [
          ['id', 'ASC'],
        ]
      })

      res.status(201).json({ navbars })

    } catch (error) {
      next(error);
    }
  }

  static async inputNavbar(req, res, next) {
    const { name, CategoryId } = req.body
    try {
      const CustomNavbar = await CustomNavbar.create({ name, CategoryId })

      res.status(201).json(CustomNavbar)

    } catch (error) {
      next(error);
    }
  }

  static async getNavbarId(req, res, next) {
    const { id } = req.params
    try {
      const CustomNavbar = await CustomNavbar.findByPk(id)

      res.status(201).json(CustomNavbar)

    } catch (error) {
      next(error);
    }
  }

  static async updateNavbar(req, res, next) {
    const { name, CategoryId } = req.body
    const { id } = req.params
    try {

      await CustomNavbar.update({ name, CategoryId }, { where: { id } })

      res.status(200).json({ message : 'Successfully update' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteNavbar(req, res, next) {
    const { id } = req.params
    try {

      await CustomNavbar.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete' })
      
    } catch (error) {
      next(error);      
    }
  }

}

module.exports = CustomNavbarControllers
