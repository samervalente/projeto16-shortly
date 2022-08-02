import { RegisterSchema, LoginSchema } from "../schemas/userSchema.js";
import bcrypt from "bcrypt"
import connection from "../database/postgre.js";

async function validateRegister(req,res, next){
    let user = req.body
    try {
        const validateSchema = RegisterSchema.validate(user, {abortEarly: false})
        if(validateSchema.error){
            const errors = validateSchema.error.details.map(error => error.message)
            return res.send(errors).status(422)
        }  
        
        const {rows: userDB} = await connection.query(`SELECT (email) FROM users WHERE email = $1`,[user.email])
        if(userDB.length !== 0 ){
            return res.status(409).send("Usuário existente")
        }
        
        const passwordCrypt = bcrypt.hashSync(req.body.password,10)
        user = {...user , password: passwordCrypt}

         res.locals.user = user
         next()

    } catch (error) {
        res.sendStatus(500)
    }
}

async function validateLogin(req, res, next){
    const user = req.body
    try {
        
        const validateSchema = LoginSchema.validate(user, {abortEarly: false})
        if(validateSchema.error){
            const errors = validateSchema.error.details.map(error => error.message)
            return res.send(errors).status(422)
        }

        const {rows: userDB} = await connection.query(`SELECT * FROM users WHERE email = $1 `,[user.email])
        if(userDB.length === 0){
            return res.status(400).send("Usuário ou senha incorreta")
        }

        const isPasswordCorrect = bcrypt.compareSync(user.password, userDB[0].password)
        if(!isPasswordCorrect){
            return res.status(401).send("Usuário ou senha incorreta") 
        }

        delete userDB[0].password
        res.locals.user = userDB[0]
          
        next()

    } catch (error) {
        
        return res.sendStatus(500)
    }
}

export {validateRegister, validateLogin}