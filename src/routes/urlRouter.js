import {Router} from "express"
import validateToken from "../middlewares/tokenValidateMiddleware.js"
import { validateURL, validateGetShortURLByParams} from "../middlewares/urlValidateMiddleware.js"
import { shortenURL, getShortURL, OpenShortURL, deleteURL } from "../controllers/urlController.js"
const routes = Router()

routes.post('/urls/shorten', validateToken, validateURL, shortenURL)
routes.get('/urls/:id', validateGetShortURLByParams, getShortURL)
routes.get('/urls/open/:shortUrl', validateGetShortURLByParams, OpenShortURL)
routes.delete('/urls/:id', validateGetShortURLByParams, deleteURL)

export default routes