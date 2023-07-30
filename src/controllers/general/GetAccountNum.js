import { StatusCodes } from "http-status-codes"
import pool from "../../models/DBconfig.js"
import { queries } from "../../queries/queries.js"



export const getAccountNum =  async (req,res) => {

    const {account_number} =  req.query

    try {
        const acntNum =  await pool.query(queries.getByAccountNumber,[account_number])

        if (acntNum.rowCount === 0)
        {
            return res.status(StatusCodes.NOT_FOUND).json({
                succcess:false,
                message:"This account is not registered with us"
            })
        }


        return res.status(StatusCodes.OK).json({
                succcess:true,
                message:"Valid account"})
    } catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success:false,
            message:error.message
        })
    }
}