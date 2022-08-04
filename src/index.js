import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./routes/userRouter.js"
import URLRouter from "./routes/urlRouter.js"
dotenv.config()


const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(cors())

  
app.use(userRouter)
app.use(URLRouter)

app.listen(PORT)