const { CustomNavbar, Warehouse, Category } = require('../models')

class CustomNavbarControllers {

  static async fetchNavbars(req, res, next) {
    const { active } = req.query
    // const isActive = active ? active.toLowerCase() === 'true' : null
    // console.log(active);
    try {
      if (active) {
        const items = await CustomNavbar.findAll(
          {
            where: { isActive: true },
            include: {
              as: 'Category',
              model: Category,
              include: {
                model: Warehouse,
                as: 'Works',
                order: [['id', 'DESC']],
                separate: true
              }
            }
          })

        res.status(200).json(items)
        
        return
      }

      const navbars = await CustomNavbar.findAll()

      res.status(201).json({ navbars })

    } catch (error) {
      next(error);
    }
  }

  static async inputNavbar(req, res, next) {
    const { name, CategoryId, isActive } = req.body
    try {
      const customNavbar = await CustomNavbar.create({ name, CategoryId, isActive: isActive === 'true' ? true : false })

      res.status(201).json(customNavbar)

    } catch (error) {
      console.log(error.message);
      next(error);
    }
  }

  static async getNavbarId(req, res, next) {
    const { id } = req.params
    try {
      const customNavbar = await CustomNavbar.findByPk(id)

      res.status(201).json(customNavbar)

    } catch (error) {
      next(error);
    }
  }

  static async updateNavbar(req, res, next) {
    const { name, CategoryId, isActive } = req.body
    const { id } = req.params
    try {

      await CustomNavbar.update({ name, CategoryId, isActive: isActive === 'true' ? true : false }, { where: { id } })

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
