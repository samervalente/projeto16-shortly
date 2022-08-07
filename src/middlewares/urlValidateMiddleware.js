import URLSchema from "../schemas/urlSchema.js"
import {getShortURL} from "./middlewaresRepositories/urlRepository.js"

async function validateURL(req,res,next){
    const url = req.body

    try {
    
        const validateSchema = URLSchema.validate(url, {abortEarly: false})
        if(validateSchema.error){
            const errors = validateSchema.error.details.map(error => error.message)
            return res.status(422).send(errors)
        }
        
        next()

    } catch (error) {
        res.sendStatus(500)
    }
}

async function validateGetShortURLByParams(req, res, next){
    try {
        const shortURL = await getShortURL(req.params)
            if(shortURL === undefined){
                return res.status(404).send("Esta URL não existe")
            }  

            res.locals.shortURL = shortURL
            next()

    } catch (error) {
        return res.sendStatus(500)
    }
}


export {validateURL, validateGetShortURLByParams}