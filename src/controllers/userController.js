import jwt from "jsonwebtoken"
import connection from "../database/postgre.js"
import bcrypt from "bcrypt"

async function RegisterUser(req, res){
    
    try {
        const passwordCrypt = bcrypt.hashSync(req.body.password,10)
        const user = {...req.body, password: passwordCrypt}
        const {name, email, password} = user

        await connection.query(`INSERT INTO users (name, email, password) VALUES ($1,$2,$3)`,[name, email, password])

        res.send(user).status(201)

        

    } catch (error) {
        if(error.code = '23505'){
            return res.status(409).send('Usuário Existente')
        }

         res.sendStatus(500)
    }
    
}

export {RegisterUser}