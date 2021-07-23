const { Contact } = require('../models')

class ContactController {
  static async fetchContacts(req, res, next) {
    try {
      const users = await Contact.findAll()
        // {
        //   order: [
        //     ['id', 'DESC'],
        //   ]
        // })

      res.status(200).json({ users })
      
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async inputContact(req, res, next) {
    const { name, email, phone_number, role } = req.body
    try {
      const dataContact = await Contact.create({ name, email, phone_number: +phone_number, role })

      res.status(201).json(dataContact)

    } catch (error) {
      next(error);
    }
  }

  static async getContactId(req, res, next) {
    const { id } = req.params
    try {
      const dataContact = await Contact.findByPk(id)

      res.status(201).json(dataContact)

    } catch (error) {
      next(error);
    }
  }

  static async updateContact(req, res, next) {
    const { name, email, phone_number, role } = req.body
    const { id } = req.params
    try {

      await Contact.update({ name, email, phone_number: +phone_number, role }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data Contact' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteContact(req, res, next) {
    const { id } = req.params
    try {

      await Contact.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data Contact' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = ContactController