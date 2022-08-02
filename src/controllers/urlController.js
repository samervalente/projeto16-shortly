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


async function getShortURL(req, res){
    const shortURL = res.locals.shortURL
    try {
            return res.status(200).send(shortURL)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

async function OpenShortURL(req, res){
    const shortURL = res.locals.shortURL
    try {
        await connection.query(`UPDATE urls SET "visitCount" = urls."visitCount" + 1 WHERE id = $1`,[shortURL.id])
        return res.send(shortURL)
           res.redirect(shortURL.url)
    } catch (error) {
        return res.sendStatus(500)
    }
}

async function deleteURL(req, res){
    const {id} = req.params
    try {
       await connection.query("DELETE FROM urls WHERE id = $1",[id])
       res.sendStatus(200) 
    } catch (error) {
        res.sendStatus(500)
    }
}


export {shortenURL, getShortURL, OpenShortURL, deleteURL}