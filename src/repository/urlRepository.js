import connection from "../database/postgre.js"

export async function shortenUserURl(userId, url, shortURL){
    await connection.query(`INSERT INTO urls ("userId", url, "shortURL") VALUES ($1,$2,$3)`,[userId, url, shortURL])
    
}