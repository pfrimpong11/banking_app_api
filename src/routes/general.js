import express from "express"
import { getProfile } from "../controllers/general/GetProfile.js";
import { verifyJwt } from "../middleware/authentication/verifyJwt.js";
import { getAccountNum } from "../controllers/general/GetAccountNum.js";



const route =  express.Router();





route.get("/profile",verifyJwt,getProfile)
route.get("/account_number",verifyJwt,getAccountNum)


export default route