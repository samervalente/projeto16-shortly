import connection from "../../database/postgre.js";
import { isEmail, isUserId } from "../../utils/validateRegex.js";

export async function queryUserEmailOnDB(email){
    const {rows: userDB} = await connection.query(`SELECT (email) FROM users WHERE email = $1`,[email])
    return userDB[0]
}

export async function queryUserOnDB(paramsValue){
    let clauseColumn;

    switch(true){
        case isEmail(paramsValue): clauseColumn = 'email'
        break;
        case isUserId(paramsValue): clauseColumn = 'id'
        break;
    }

    const {rows: userDB} = await connection.query(`SELECT * FROM users WHERE ${clauseColumn} = $1`,[paramsValue])
   
    return userDB[0]
}