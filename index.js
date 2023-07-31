const  express = require( "express")
const  dotenv = require( "dotenv")
const  authRoute = require( "./src/routes/auth.js")
const   trancationRoute = require( "./src/routes/transactions.js")
const  generalRoute = require( "./src/routes/general.js")
const  sudoRoute = require( "./src/routes/sudo.js")
const  cookieParser = require( "cookie-parser")
const  cors = require( "cors")
const  bodyParser = require( "body-parser")
const  swaggerUi = require( "swagger-ui-express")
const  swaggerJSdoc = require( "swagger-jsdoc")
const  swaggerDocument = require( "./swagger.json") 
const  YAML = require( "yaml")
const  fs = require( "fs")

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
    failOnErrors: true, 
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes*.js']
  };

  // const openapiSpecification = swaggerJSdoc(options)
const app = express()
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,openapiSpecification));
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

process.on('uncaughtException', (err) => {
  console.error('Unhandled Exception:', err);
  
  process.exit(1); 
});

