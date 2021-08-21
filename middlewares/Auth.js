const { verifyToken } = require('../helpers/useJwt')
const { User } = require('../models/')

const authenticate = async (req, res, next) => {
  try {
    const { access_token } = req.headers
    const decoded  = verifyToken(access_token)

    if (decoded) {
      const user = await User.findOne({where: { username: decoded.username } })
      if (user) {
        req.currentUser = { id : user.id, username: decoded.username }
      
        next()
      } else {
        next({ code : 404,
          message : 'User Not Found'
        })  
      }
    } else {
      next({ code : 403,
        message : 'Invalid Token'
      })
    }

  } catch (error) {
    next(error)
  }
}

const authorize = (req, res, next) => {

}

module.exports = { 
  authenticate,
  authorize
 }