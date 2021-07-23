const { contact } = require('../models')

class ClientController {
  static async fetchClients(req, res, next) {
    try {
      const users = await contact.findAll(
        {
          order: [
            ['id', 'DESC'],
          ]
        })

      res.status(200).json({ users })
      
    } catch (error) {
      console.log(error);
      next(error);
    }
  }

  static async inputClient(req, res, next) {
    const { name, email, phone_number, role } = req.body
    try {
      const dataClient = await contact.create({ name, email, phone_number, role })

      res.status(201).json(dataClient)

    } catch (error) {
      next(error);
    }
  }

  static async getClientId(req, res, next) {
    const { id } = req.params
    try {
      const dataClient = await contact.findByPk(id)

      res.status(201).json(dataClient)

    } catch (error) {
      next(error);
    }
  }

  static async updateClient(req, res, next) {
    const { name, email, phone_number, role } = req.body
    const { id } = req.params
    try {

      await contact.update({ name, email, phone_number, role }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data contact' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteClient(req, res, next) {
    const { id } = req.params
    try {

      await contact.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data contact' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = ClientController