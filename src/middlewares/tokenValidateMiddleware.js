import jwt from "jsonwebtoken";

export default async function ValidateToken(req, res, next){
   try {
    const token = req.headers.authorization.replace("bearer ", "")
    const {id} = jwt.verify(token, "secret")
    console.log("id do usuário da sessão ativa: " + id)
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