const  express = require( "express")
const  Register  = require( "../controllers/auth/Register.js")
const   verifyInputs  = require( "../middleware/authentication/verifyInputs.js")
const   checkDuplicate = require( "../middleware/authentication/checkDuplicate.js")
const   login = require( "../controllers/auth/Login.js")
const   logout  = require( "../controllers/auth/Logout.js")
const   verifyJwt = require( "../middleware/authentication/verifyJwt.js")
const  profile  = require( "../controllers/auth/Profile.js")
const route =  express.Router()




route.post("/register",[verifyInputs,checkDuplicate],Register);
route.post("/login",login)
route.post("/logout",verifyJwt,logout)
route.get("/profile",verifyJwt,profile)















module.exports = route