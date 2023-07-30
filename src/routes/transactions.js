import express from "express";
import { verifyJwt } from "../middleware/authentication/verifyJwt.js";
import checkBalance from "../controllers/transactions/CheckBalance.js";
import transaction from "../controllers/transactions/Transfer.js";

const route =  express.Router()


route.get("/checkbalance",verifyJwt,checkBalance)
route.post("/transfer",verifyJwt,transaction)




export  const rte =  route


















export default route