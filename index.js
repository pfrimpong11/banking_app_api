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
const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const  YAML = require( "yaml")
const  fs = require( "fs")

dotenv.config()



const options = {
    failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
    definition: {
      openapi: '3.0.0',
      info: {
        title: 'Hello World',
        version: '1.0.0',
      },
    },
    apis: ['./src/routes*.js']
  };

const openapiSpecification = swaggerJSdoc(options)
const app = express()
// app.use(express.static('public'))


// app.use((req, res, next) => {
//   if (req.url.endsWith('.css')) {
//     res.setHeader('Content-Type', 'text/css');
//   }
//   next();
// });
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument,openapiSpecification));
app.get("/",(req,res)=> {res.redirect("/api-docs")})
app.get('/api-docs/swagger-ui.css', (req, res) => {
  res.setHeader('Content-Type', 'text/css');
});
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

