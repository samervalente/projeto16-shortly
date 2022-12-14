import {Router} from "express"
import { validateRegister, validateLogin } from "../middlewares/userValidateMiddleware.js"
import { RegisterUser, LoginUser } from "../controllers/userController.js"
const routes = Router()

routes.post("/signup", validateRegister, RegisterUser)
routes.post("/signin", validateLogin, LoginUser)



export default routes