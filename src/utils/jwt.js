import jwt from 'jsonwebtoken'
import config from '../config/config.js'
// token create
function createJwt(data){
    const token=jwt.sign(data,config.JWT_SECRET,)
return token
}
// verify
async function verifyjwt(authtoken){
  return await new Promise((resolve, reject) => {
      jwt.verify(authtoken, config.JWT_SECRET, (error, data) => {
        if (error) return reject(error)
        return resolve(data)
      })
  })
}

export {createJwt,verifyjwt}