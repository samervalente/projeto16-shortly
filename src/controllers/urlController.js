import { customAlphabet } from "nanoid";
import {shortenUserURl, updateVisitCount, deleteUserURL, getUserURLS, queryRanking} from "./controllersRespositories/urlRepository.js"
import dotenv from "dotenv"
dotenv.config()

async function shortenURL(req, res){
    let url = req.body.url
    const {id: userId} = res.locals
    
    try {
        let nanoid =  customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz',10)
        const shortUrl = nanoid(8)

        await shortenUserURl(userId, url, shortUrl)
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
    const {id, url} = res.locals.shortURL
    try {
       
        await updateVisitCount(id)
        return res.redirect(url)

    } catch (error) {
         res.sendStatus(500)
    }
}

async function deleteURL(req, res){
    const {id} = req.params
    try {

       deleteUserURL(id)
       res.sendStatus(200)

    } catch (error) {
        res.sendStatus(500)
    }
}

async function getUserURLs(req, res){
    const {id: userId} = res.locals
    
    try {

        const userURLS = await getUserURLS(userId)
        res.send(userURLS)

    } catch (error) {
        res.sendStatus(500)
    }
}

async function getRanking(req, res){
    try {

        const ranking = await queryRanking()
        res.status(200).send(ranking)

    } catch (error) {
        res.sendStatus(500)
    }
}



export {shortenURL, getShortURL, OpenShortURL, deleteURL, getUserURLs, getRanking}