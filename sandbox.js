const  { hashPassword } = require('./helpers/useBcrypt')

console.log(hashPassword('123456'));