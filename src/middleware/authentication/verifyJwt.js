import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken"



export const verifyJwt = (req,res,next)=>{

    const {token} = req.cookies;
    // return res.json(token)
console.log(token)
    if (!token){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success:false,
            message:"Your are not authorized to perform this action please contact us"
        })
    }
    const matchToken =  jwt.verify(token,process.env.JWT_SECRET)
    
    if (!matchToken){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success:false,
            message:"Your are not authorized to perform this action please contact us"
        })
    }
    req.user = matchToken
    next()
}