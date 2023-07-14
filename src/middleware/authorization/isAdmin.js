import { StatusCodes } from "http-status-codes"
import { verifyJwt } from "../authentication/verifyJwt"

export const isAdmin = (req, res, next)=>{
    return  verifyJwt(req,res,()=>{
        if (!req.user.isAdmin){
            return res.status(StatusCodes.UNAUTHORIZED).json({
                success:false,
                message:"Your are not authorized to access this route"
              })
        }
        else{
            next()
        }
    })
}