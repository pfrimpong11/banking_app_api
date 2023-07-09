import { StatusCodes } from "http-status-codes"

export const profile  = (req,res)=>{

    if (!req.user){
        return res.status(StatusCodes.UNAUTHORIZED).json({
            success:false,
            message:"Please login to acccess this route"
        })
    }
    else
    {
        res.status(StatusCodes.OK).json(req.user)
    }
}