import express from "express"
import dotenv from "dotenv"
import authRoute from "./src/routes/auth.js"
import cookieParser from "cookie-parser"
dotenv.config()



const app = express()
app.use(express.json())
app.use(cookieParser())
app.use("/auth",authRoute)
const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server i slistening on port ${PORT}`)
})