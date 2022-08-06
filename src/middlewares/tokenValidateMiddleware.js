import jwt from "jsonwebtoken";
import dotenv from "dotenv"

dotenv.config()

export default async function ValidateToken(req, res, next){
   try {
    const token = req.headers.authorization.replace("Bearer ", "")
    console.log(token)
    const {id} = jwt.verify(token, process.env.JWT_KEY)
    if(!token || !id){
        return res.sendStatus(401)
    }

 

    res.locals.id = id
    next()
   } catch (error) {
    res.sendStatus(500)
   }
}