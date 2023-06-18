import express from "express"
import dotenv from "dotenv"
import authRoute from "./src/routes/auth.js"
dotenv.config()



const app = express()
app.use(express.json())
const PORT = process.env.PORT || 4000
app.use("/auth",authRoute)

app.listen(PORT,()=>{
    console.log(`Server i slistening on port ${PORT}`)
})