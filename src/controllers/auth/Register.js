const { StatusCodes } = require( "http-status-codes")
const pool = require( "../../models/DBconfig.js")
const { queries } = require( "../../queries/queries.js")
const { generateAccountNumber } = require( "../../util/createAccountNumber.js")
const bcrypt = require( "bcryptjs")

 const Register = async (req,res)=>{
   
    const {first_name,last_name,email,password,address,date_of_birth, ghana_card_number,phone} = req.body
    
   try {
    

    const salt   =  await bcrypt.genSalt(+process.env.SALT)
    const hashedPassword = await bcrypt.hash(password,salt)
    const account_number =  generateAccountNumber()
    
    
    const result =  await pool.query(queries.registerUser,[ first_name , last_name , date_of_birth , phone , email , address , ghana_card_number , account_number,hashedPassword])
    
    return res.status(StatusCodes.OK).json({success:true,message:"Acount created successfully!"})
   } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({success:false,message:error})
   }

}


module.exports = Register