import {Router} from "express"
import validateToken from "../middlewares/tokenValidateMiddleware.js"
import {validateURL, validateGetShortURLByParams} from "../middlewares/urlValidateMiddleware.js"
import {shortenURL, getShortURL, OpenShortURL, deleteURL, getUserURLs } from "../controllers/urlController.js"
import {validateUserExistence} from "../middlewares/userValidateMiddleware.js"
const routes = Router()

routes.post('/urls/shorten', validateToken, validateURL, shortenURL)
routes.get('/urls/:id', validateGetShortURLByParams, getShortURL)
routes.get('/urls/open/:shortUrl', validateGetShortURLByParams, OpenShortURL)
routes.delete('/urls/:id', validateGetShortURLByParams, deleteURL)
routes.get("/users/me", validateToken, validateUserExistence, getUserURLs)

export default routes