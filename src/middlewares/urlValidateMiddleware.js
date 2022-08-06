import joi from "joi"
import connection from "../database/postgre.js"
import URLSchema from "../schemas/urlSchema.js"


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
    const {id, shortUrl} = req.params
    let Clause = {column: "", value:""}
    
    try {
        id ?  
        Clause = {column: 'id', value: id } : 
        Clause = {column: "shortURL", value: shortUrl}
        
        const getShortURLQuery = `
        SELECT urls.id, urls."shortURL" as shortUrl, urls.url FROM urls WHERE "${Clause.column}" = $1` 

            const {rows: shortURL} = await connection.query(getShortURLQuery, [Clause.value])
            if(shortURL.length === 0 ){
                return res.status(404).send("Esta URL não existe")
            }
            
            res.locals.shortURL = shortURL[0]
           
            next()


    } catch (error) {
        
        return res.sendStatus(500)
    }
}


export {validateURL, validateGetShortURLByParams}