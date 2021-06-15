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
          console.log({ message: "Invalid Username / Password" })
        }
      } else {
        console.log({ message: "Invalid Username / Password" })
      }
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
