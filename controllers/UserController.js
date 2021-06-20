const { User } = require('../models/')
const { generateToken } = require('../helpers/useJwt')
const { comparePassword } = require('../helpers/useBcrypt')
class UserController {

  static async getUser(req, res, next) {
    const { username, password } = req.body
    
    try {
      const user = await User.findOne({where: { username }})
      if (user) {
        const thisPasword = comparePassword(password, user.password)

        if (thisPasword) { 
          const token  = generateToken({ id: user.id, username: user.username })

          res.status(200).json({ token })
        } else {
          next({ message: "Invalid Username / Password", code: 401 })
        }
      } else {
        next({ message: "Invalid Username / Password", code: 401 })
      }
    } catch (error) {
      next(error);
    }
  }

  static async createUserAdmin(req, res, next) {
    const { username, email, password } = req.body
    try {
      const user = await User.create({ username, email, password })
      
      res.status(201).json(user)
    } catch (error) {
      next(error);
    }
  }

  static async updateUserAdmin(req, res, next) {
    const { email, password } = req.body
    try {
      const user = await User.create({ username, email, password })
      
      res.status(201).json(user)
    } catch (error) {
      next(error);
    }
  }

}

module.exports = UserController
