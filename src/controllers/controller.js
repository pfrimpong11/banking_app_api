const pool = require("../../db")
const queries = require("./queries")
const getStudents =(req,res)=>{

pool.query(queries.getAllStudents,(error,results)=>{

    if(error) throw new Error(error.message)
   return res.status(200).json(results.rows)
})
}

const getStudentById = (req,res)=>{

    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById,[id],(error,results)=>{

        if(error) throw new Error(error.message)
        return res.status(200).json(results.rows)
    })
}

const addStudent =(req,res)=>{

    const {name,email,dob,age} = req.body

    // check if email exists
    pool.query(queries.checkEmailExists,[email],(error,results)=>{
        if(results.rows.length){
       return     res.send("Email already exists")
        }

        // add student to db
        pool.query(queries.addStudent,[name,email,dob,age],(error,results)=>{

            if(error) throw new Error(error.massage)
           return res.status(200).send("student created successfully!")
        })
    })
}

const removeStudent = (req,res)=>{

    const id = parseInt(req.params.id)
    pool.query(queries.getStudentById,[id],(error,results)=>{

        if(!results.rows.length){
            return res.send("Student does not exit in db")
        }
        pool.query(queries.removeStudent,[id],(error,results)=>{
            if(error) throw new Error(error.message)
            
                return res.status(200).send("Student removed succssfully")
            
        })
    })
}

const updateStudent = (req,res)=>{
    const id =  parseInt(req.params.id)
    const {name} = req.body

    pool.query(queries.getStudentById, [id],(error,results)=>{

        if(!results.rows.length){
            return res.send("Student does not exit in db")
        }
        pool.query(queries.updateStudent, [name,id],(error,results)=>{
            if(error) throw new Error(error.message)

            res.status(200).send("student updated sucessfully!")
        })
    }
        
        )
}
module.exports ={getStudents,getStudentById,addStudent,removeStudent,updateStudent}