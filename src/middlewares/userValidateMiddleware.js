import { RegisterSchema, LoginSchema } from "../schemas/userSchema.js";
import bcrypt from "bcrypt"
import {queryUserEmailOnDB, queryUserOnDB} from "./middlewaresRepositories/userRepository.js"

async function validateRegister(req,res, next){
    let user = req.body
    
    try {
        const validateSchema = RegisterSchema.validate(user, {abortEarly: false})
        if(validateSchema.error){
            const errors = validateSchema.error.details.map(error => error.message)
            return res.status(422).send(errors)
        }  
        
        const userEmailOnDB = await queryUserEmailOnDB(user.email);
        
        if(userEmailOnDB !== undefined ){
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
            return res.status(422).send(errors)
        }

        const userOnDB = await queryUserOnDB(user.email);
        if(userOnDB === undefined){
            return res.status(400).send("Usuário ou senha incorreta")
        }
        
        const isPasswordCorrect = bcrypt.compareSync(user.password, userOnDB.password)
        if(!isPasswordCorrect){
            return res.status(401).send("Usuário ou senha incorreta") 
        }

        delete userOnDB.password
        res.locals.user = userOnDB
        next()

    } catch (error) {
         res.sendStatus(500)
    }
}


async function validateUserExistence(req, res, next){
    const {id: userId} = res.locals
   
    try {
        const userOnDB = await queryUserOnDB(userId)
        
        if(userOnDB === undefined ){
            return res.status(404).send("Usuário não encontrado")
        }  
        next()


    } catch (error) {
        
        res.sendStatus(500)
    }
}


export {validateRegister, validateLogin, validateUserExistence}