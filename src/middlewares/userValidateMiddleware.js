import connection from "../database/postgre.js";
import { RegisterSchema, LoginSchema } from "../schemas/userSchema.js";

async function validateRegister(req,res, next){
    const user = req.body
    try {
        const validateSchema = RegisterSchema.validate(user, {abortEarly: false})
        if(validateSchema.error){
            const errors = validateSchema.error.details.map(error => error.message)
            return res.send(errors).status(400)
        }   
        
        next()

    } catch (error) {
        res.sendStatus(500)
    }
}

export {validateRegister}