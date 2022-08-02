import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import userRouter from "./routes/userRouter.js"
dotenv.config()

const PORT = process.env.PORT
const app = express()

app.use([cors(), express.json()])
app.use(userRouter)

app.listen(PORT)