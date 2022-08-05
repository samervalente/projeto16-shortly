import jwt from "jsonwebtoken"
import connection from "../database/postgre.js"


async function RegisterUser(req, res){
    try {
        const {name, email, password} = res.locals.user
        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1,$2,$3)`,[name, email, password])
        return res.sendStatus(201)

    } catch (error) {
         res.sendStatus(500)
    } 
}

async function LoginUser(req, res){
    try {
        const user = res.locals.user
        const token = jwt.sign({id: user.id}, 'secret')
       
        return res.status(200).send({...user, token})

    } catch (error) {
        return res.sendStatus(500)
    }
}



export {RegisterUser, LoginUser}