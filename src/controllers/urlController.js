import connection from "../database/postgre.js";
import { customAlphabet } from "nanoid";


async function shortenURL(req, res){
    let url = req.body.url
    const {id: userId} = res.locals
    console.log(res.locals.id)
    try {
        let nanoid =  customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz',10)
       
        const shortUrl = nanoid(8)
        await connection.query(`INSERT INTO urls ("userId", url, "shortURL") VALUES ($1,$2,$3)`,[userId, url, shortUrl])
        
        return res.sendStatus(201)
    } catch (error) {
        console.log(error)
        return res.sendStatus(500)
    }
}


async function getShortURLById(req, res){
    const shortURL = res.locals.shortURL
    try {
        res.status(200).send(shortURL)

    } catch (error) {
        res.sendStatus(500)
    }
}

export {shortenURL, getShortURLById}