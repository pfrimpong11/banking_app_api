const express = require( "express")
const  getProfile  = require( "../controllers/general/GetProfile.js");
const  verifyJwt  = require( "../middleware/authentication/verifyJwt.js");
const  getAccountNum  = require( "../controllers/general/GetAccountNum.js");



const route =  express.Router();





route.get("/profile",verifyJwt,getProfile)
route.get("/account_number",verifyJwt,getAccountNum)


module.exports = route