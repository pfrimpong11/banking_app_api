const { StatusCodes } = require( "http-status-codes")

const profile  = (req,res)=>{

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

module.exports = profile