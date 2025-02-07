import jwt from "jsonwebtoken"
export default (req,ers,next) => {
   console.log(req.headers.authorization)
   const token  = req.headers.authorization.split(' ')[1]
   if(token != ""){
    console.log(jwt.verify(token, 'privatekey'));
    next()
   }
}