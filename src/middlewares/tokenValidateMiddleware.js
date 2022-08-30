import jwt from "jsonwebtoken";
import dotenv from "dotenv"
import connection from "../database/postgre.js"

dotenv.config()

export default async function ValidateToken(req, res, next){
   
   try {
    const token = req.headers.authorization.replace("Bearer ", "")
    const {id} = jwt.verify(token,'secret')
   
    const result = await connection.query(`SELECT * FROM users WHERE id = $1`, [id])
    if(result.rowCount === 0 ){
        return res.sendStatus(404)
    }
    res.locals.id = id

    next()
   } catch (error) {
    res.sendStatus(401)
   }
}