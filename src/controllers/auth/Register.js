import pool from "../../models/DBconfig.js"
import { queries } from "../../queries/queries.js"
import { generateAccountNumber } from "../../util/createAccountNumber.js"
import bcrypt from "bcryptjs"


export const Register = async (req,res)=>{
   
    const {first_name,last_name,email,password,address,dob, ghana_card_number,phone} = req.body

    

    const salt   =  await bcrypt.genSalt(+process.env.SALT)
    const hashedPassword = await bcrypt.hash(password,salt)
    const account_number =  generateAccountNumber()

    pool.query(queries.registerUser,[ first_name , last_name , dob , phone , email , address , ghana_card_number , account_number,hashedPassword],(error,result)=>{
        if(error){
            return res.json(error.message)
        }
        res.json(result.rows)
    })


}