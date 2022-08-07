import connection from "../../database/postgre.js"

export async function insertUser(name, email, password){
    await connection.query(`INSERT INTO users (name, email, password) VALUES ($1,$2,$3)`,[name, email, password])
}

