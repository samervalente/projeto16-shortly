import joi from "joi"
import connection from "../database/postgre.js"
import URLSchema from "../schemas/urlSchema.js"


async function validateURL(req,res,next){
    const url = req.body
    try {
        
        if(req.params.id){
            const {rows: shortURL} = await connection.query(`SELECT urls.id, urls."shortURL" as shortUrl, urls.url FROM urls WHERE id = $1`,[req.params.id])
            if(shortURL.length === 0 ){
                return res.status(400).send("Esta URL não existe")
            }
            res.locals.shortURL = shortURL[0]
        }


        const validateSchema = URLSchema.validate(url, {abortEarly: false})
        if(validateSchema.error){
         
            const errors = validateSchema.error.details.map(error => error.message)
            return res.send(errors).status(422)
        }
        
        
        next()

    } catch (error) {
        res.sendStatus(500)
    }
}


export {validateURL}