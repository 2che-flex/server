const { User } = require('../models/')

class UserController {

  static async getUser(req, res, next) {
    const { username, password } = req.body
    try {
      const user = await User.findOne({where: { username }})
      res.status(200).json({user})
      
    } catch (error) {
      console.log(error);
    }
  }

  static async createUserAdmin(req, res, next) {
    const { username, email, password } = req.body
    try {
      console.log({ username, email, password });
      const user = await User.create({ username, email, password })
      
      res.status(201).json(user)
    } catch (error) {
      console.log(error);
    }


  }

}

module.exports = UserController