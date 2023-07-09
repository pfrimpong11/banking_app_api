
import {StatusCodes} from "http-status-codes"
 export const verifyInputs = (req,res,next)=>{
     
    const {first_name,last_name,email,password,address,dob, ghana_card_number,phone} = req.body
    let regex =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    
    const userInputs = [first_name,last_name,email,password,address,dob, ghana_card_number,phone]
    const required = [];

    if (!regex.test(email)){
      return res.status(StatusCodes.BAD_REQUEST).json({
         success:false,
         message:"Invalid Email please make sure you are entering the right email"
       })
    }
   for (const param of userInputs) {

    if(param?.length==0 || param == "undefined" || typeof param != "string"){
        required.push(param)
    }

   }
   if(required.length > 0){
      return res.status(StatusCodes.PARTIAL_CONTENT).json({
        success:false,
        message:"All fields are required"
      })
   }
   next()
}