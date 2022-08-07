import jwt from "jsonwebtoken"
import {insertUser} from "./controllersRespositories/userRepository.js"

async function RegisterUser(req, res){
    const {name, email, password} = res.locals.user
    try {
        insertUser(name, email, password)
        return res.sendStatus(201)

    } catch (error) {
         res.sendStatus(500)
    } 
}

async function LoginUser(req, res){
    try {
        const user = res.locals.user
        const token = jwt.sign({id: user.id}, 'secret')
       
        return res.status(200).send({name:user.name, token})

    } catch (error) {
        return res.sendStatus(500)
    }
}


export {RegisterUser, LoginUser}