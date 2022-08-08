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
        res.status(201).send({shortUrl})

    } catch (error) {
        res.status(500).send(error)
    }
}


async function getShortURL(req, res){
    const shortURL = res.locals.shortURL
    try {

        res.status(200).send(shortURL)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function OpenShortURL(req, res){
    const {id, url} = res.locals.shortURL
    try {
    
        await updateVisitCount(id)
        res.redirect(200, url)

    } catch (error) {
         res.status(500).send(error)
    }
}

async function deleteURL(req, res){
    const {id} = req.params
    try {

       deleteUserURL(id)
       res.sendStatus(200)

    } catch (error) {
        res.status(500).send(error)
    }
}

async function getUserURLs(req, res){
    const {id: userId} = res.locals
    
    try {

        const userURLS = await getUserURLS(userId)
        console.log(userURLS)
        res.send(userURLS)

    } catch (error) {   
        res.status(500).send(error)
    }
}

async function getRanking(req, res){
    try {

        const ranking = await queryRanking()
        res.status(200).send(ranking)

    } catch (error) {
        res.status(500).send(error)
    }
}



export {shortenURL, getShortURL, OpenShortURL, deleteURL, getUserURLs, getRanking}