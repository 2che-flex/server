const { client } = require('../models')

class ClientController {
  static async fetchClients(req, res, next) {
    console.log('===============run--------=>>')
    try {
      const users = await client.findAll(
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
    const { name, email, phone_number } = req.body
    try {
      const dataClient = await client.create({ name, email, phone_number })

      res.status(201).json(dataClient)

    } catch (error) {
      next(error);
    }
  }

  static async getClientId(req, res, next) {
    const { id } = req.params
    try {
      const dataClient = await client.findByPk(id)

      res.status(201).json(dataClient)

    } catch (error) {
      next(error);
    }
  }

  static async updateClient(req, res, next) {
    const { name, email, phone_number } = req.body
    const { id } = req.params
    try {

      await client.update({ name, email, phone_number }, { where: { id } })

      res.status(200).json({ message : 'Successfully update data client' })
      
    } catch (error) {
      next(error);    
    }
  }

  static async deleteClient(req, res, next) {
    const { id } = req.params
    try {

      await client.destroy({ where: { id } })

      res.status(200).json({ message : 'Successfully delete data client' })
      
    } catch (error) {
      next(error);      
    }
  }
}

module.exports = ClientController