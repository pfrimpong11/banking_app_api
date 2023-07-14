import express from "express"
import { Register } from "../controllers/auth/Register.js"
import { verifyInputs } from "../middleware/authentication/verifyInputs.js"
import { checkDuplicate} from "../middleware/authentication/checkDuplicate.js"
import { login } from "../controllers/auth/Login.js"
import { logout } from "../controllers/auth/Logout.js"
import { verifyJwt } from "../middleware/authentication/verifyJwt.js"
import { profile } from "../controllers/auth/Profile.js"
const route =  express.Router()




route.post("/register",[verifyInputs,checkDuplicate],Register);
route.post("/login",login)
route.post("/logout",verifyJwt,logout)
route.get("/profile",verifyJwt,profile)















export default route