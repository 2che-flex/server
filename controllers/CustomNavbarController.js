const { CustomNavbar, Warehouse, Category } = require('../models')

class CustomNavbarControllers {

  static async fetchNavbars(req, res, next) {
    const { active } = req.query
    try {
      if (active?.toLowerCase() === 'true') {
        const items = await CustomNavbar.findAll(
          {
            where: { isActive: "true" },
          })

        res.status(200).json(items)
        
        return
      }

      const navbars = await CustomNavbar.findAll()

      res.status(200).json({ navbars })

    } catch (error) {
      next(error);
    }
  }

  static async inputNavbar(req, res, next) {
    const { name, textHtml, isActive } = req.body
    try {
      const customNavbar = await CustomNavbar.create({ name, textHtml, isActive: isActive === 'true' ? true : false })

      res.status(201).json(customNavbar)

    } catch (error) {
      next(error);
    }
  }

  static async getNavbarId(req, res, next) {
    const { id } = req.params
    try {
      const customNavbar = await CustomNavbar.findByPk(id)

      res.status(200).json(customNavbar)

    } catch (error) {
      next(error);
    }
  }

  static async updateNavbar(req, res, next) {
    const { name, textHtml, isActive } = req.body
    const { id } = req.params
    try {

      await CustomNavbar.update({ name, textHtml, isActive: isActive === 'true' ? true : false }, { where: { id } })

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
