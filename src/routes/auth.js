import express from "express"
import { Register } from "../controllers/auth/Register.js"
import { verifyInputs } from "../middleware/verifyInputs.js"
const route =  express.Router()




route.post("/register",verifyInputs,Register)















export default route