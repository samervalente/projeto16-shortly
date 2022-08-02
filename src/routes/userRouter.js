import {Router} from "express"
import { RegisterUser } from "../controllers/userController.js"
import { validateRegister } from "../middlewares/userValidateMiddleware.js"
const routes = Router()

routes.post("/signup", validateRegister, RegisterUser)
routes.post("/signin")

routes.get("/users/me")
routes.get("/ranking")


export default routes