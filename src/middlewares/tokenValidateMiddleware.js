import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export default async function ValidateToken(req, res, next){
   try {
    const token = req.headers.authorization.replace("Bearer ", "")
    
    const {id} = jwt.verify(token,'secret')
    if(!token || !id){
        return res.sendStatus(401)
    }

 

    res.locals.id = id
    next()
   } catch (error) {
    console.log(error)
    res.sendStatus(500)
   }
}