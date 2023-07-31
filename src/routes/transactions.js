const  express = require( "express");
const   verifyJwt  = require( "../middleware/authentication/verifyJwt.js");
const  checkBalance = require( "../controllers/transactions/CheckBalance.js");
const  transaction = require( "../controllers/transactions/Transfer.js");

const route =  express.Router()


route.get("/checkbalance",verifyJwt,checkBalance)
route.post("/transfer",verifyJwt,transaction)




module.exports =  route













