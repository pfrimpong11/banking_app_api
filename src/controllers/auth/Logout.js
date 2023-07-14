import { StatusCodes } from "http-status-codes"

export const logout = (req,res)=>{
    
    res.cookie("token","")
    return res.status(StatusCodes.OK).
    json({success:true, message:"logout successfull"})
}