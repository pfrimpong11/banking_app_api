import express from "express"
import dotenv from "dotenv"
import authRoute from "./src/routes/auth.js"
import { rte as trancationRoute } from "./src/routes/transactions.js"
import generalRoute from "./src/routes/general.js"
import {sudo as sudoRoute} from "./src/routes/sudo.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import bodyParser from "body-parser"
import swaggerUi from "swagger-ui-express"
import swaggerJSdoc from "swagger-jsdoc"
import swaggerDocument from "./swagger.json" assert {type:"json"}
import YAML from "yaml"
import fs from "fs"

dotenv.config()

// SWAGGER SETUP

// const file = fs.readFileSync("./swagger.yaml","utf8")
// const swaggerDocument =  YAML.parse(file)
// const swaggerOptions ={
//     swaggerDefinitions:{
//         info:"Banking api",
//         version:"1.0.0"
//     },
//     apis:["index.js"]
// }
// const swaggerDocs = swaggerJSDoc(swaggerOptions)

const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes*.js'],
  };

  const openapiSpecification = swaggerJSdoc(options)
const app = express()
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,openapiSpecification));
app.use(cors({origin:"http://localhost:19006", credentials:true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use("/auth",authRoute)
app.use("/transaction",trancationRoute)
app.use("/get",generalRoute)
app.use("/sudo",sudoRoute)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`)
})
