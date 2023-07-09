import { StatusCodes } from "http-status-codes"
import pool from "../../models/DBconfig.js"
import { queries } from "../../queries/queries.js"
import { generateAccountNumber } from "../../util/createAccountNumber.js"
import bcrypt from "bcryptjs"

export const Register = async (req,res)=>{
   
    const {first_name,last_name,email,password,address,dob, ghana_card_number,phone} = req.body
    
   try {
    

    const salt   =  await bcrypt.genSalt(+process.env.SALT)
    const hashedPassword = await bcrypt.hash(password,salt)
    const account_number =  generateAccountNumber()

    const result =  await pool.query(queries.registerUser,[ first_name , last_name , dob , phone , email , address , ghana_card_number , account_number,hashedPassword])
    
    return res.status(StatusCodes.OK).json({success:true,message:"Acount created successfully!"})
   } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success:false,message:error})
   }

}