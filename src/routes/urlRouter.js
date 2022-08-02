import {Router} from "express"
import validateToken from "../middlewares/tokenValidateMiddleware.js"
import { validateURL} from "../middlewares/urlValidateMiddleware.js"
import { shortenURL, getShortURLById } from "../controllers/urlController.js"
const routes = Router()

routes.post('/urls/shorten', validateToken, validateURL, shortenURL)
routes.get('/urls/:id', validateURL, getShortURLById)
routes.get('/urls/open/:shortUrl')
routes.delete('/urls/:id')

export default routes