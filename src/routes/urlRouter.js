import {Router} from "express"
const routes = Router()

routes.post('/urls/shorten')
routes.get('/urls/:id')
routes.get('/urls/open/:shortUrl')
routes.delete('/urls/:id')

export default routes