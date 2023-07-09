import { StatusCodes } from "http-status-codes";
import pool from "../../models/DBconfig.js";
import { queries } from "../../queries/queries.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"

export const login = async (req,res)=>{

    const {first_name , last_name,email, password} =  req.body;

    try {
        const user =  await pool.query(queries.getByFirstName_LastName_Email,[first_name,last_name,email])
        
        if (!user)
        {
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false, message:"Username or Password incorrect"
            })
        }
        // return res.json(user.rows[0])
        const isMatch =  await bcrypt.compare(password,user.rows[0].password)
        if (!isMatch)
        {
            return res.status(StatusCodes.NOT_FOUND).json({
                success:false, message:"Username or Password incorrect"
            })
        }
        const verifiedUser = user.rows[0];
        const token = jwt.sign({id:verifiedUser._id,firstname:verifiedUser.first_name},process.env.JWT_SECRET)

        return res.cookie("token",token).json({
            success:true,message:"Login successfull"
        })

    } catch (error) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success:false,
            message:error
        })
        
    }


}