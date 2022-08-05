import connection from "../database/postgre.js";
import { customAlphabet } from "nanoid";


async function shortenURL(req, res){
    let url = req.body.url
    const {id: userId} = res.locals
    
    try {
        let nanoid =  customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz',10)
        const shortUrl = nanoid(8)
        await connection.query(`INSERT INTO urls ("userId", url, "shortURL") VALUES ($1,$2,$3)`,[userId, url, shortUrl])
        
        
        return res.status(201).send({shortUrl})
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
        
        res.sendStatus(500)
    }
}

async function OpenShortURL(req, res){
    const shortURL = res.locals.shortURL
    try {
       
        await connection.query(`UPDATE urls SET "visitCount" = urls."visitCount" + 1 WHERE id = $1`,[shortURL.id])
        res.setHeader("Access-Control-Allow-Origin", ['*'])
  
        return res.redirect(shortURL.url)
    } catch (error) {
        console.log(error)
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

async function getUserURLs(req, res){
    const {id: userId} = res.locals
    
    try {
        const {rows: userTotalVisitCounts} = await connection.query(`
        SELECT urls."userId" as id, SUM(urls."visitCount") as visitCount, users.name as name FROM urls 
        JOIN users ON urls."userId" = users.id 
        WHERE "userId" = $1 
        GROUP BY "userId", users.name`,[userId])
        
        const {rows: userShortenedUrls} = await connection.query(`SELECT id, "shortURL", url, "visitCount"  FROM urls WHERE "userId" = $1`,[userId])

        res.send(mountOutput(userTotalVisitCounts[0], userShortenedUrls))
    } catch (error) {
        res.sendStatus(500)
    }
}


function mountOutput(obj, arr){
    const output = {...obj, shortenedUrls: arr}
    return output

}

async function getRanking(req, res){
    try {
        const {rows: ranking} = await connection.query(`
        SELECT "userId" as id, users.name, COUNT("shortURL") as "linksCount",  SUM("visitCount") as "visitCount" 
        FROM urls 
        INNER JOIN users
        ON "userId" = users.id
        GROUP BY "userId", users.name
        ORDER BY "visitCount" DESC
        LIMIT 10`)

        res.status(200).send(ranking)
    } catch (error) {
        res.sendStatus(500)
    }
}



export {shortenURL, getShortURL, OpenShortURL, deleteURL, getUserURLs, getRanking}