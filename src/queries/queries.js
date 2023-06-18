

const getAllStudents = "SELECT * FROM students"
const getStudentById =  "SELECT * FROM students WHERE id = $1"
const checkEmailExists = "SELECT s FROM students s WHERE s.email =  $1"
const addStudent= "INSERT INTO students (name,email,dob,age) VALUES ($1, $2, $3, $4) "
const removeStudent = "DELETE FROM students WHERE id = $1"
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2"

const registerUser  = "INSERT INTO customer ( first_name , last_name , dob , phone , email , address , ghana_card_number ,account_number,password) VALUES( $1, $2, $3, $4, $5, $6, $7, $8,$9);"
export const queries={
    getAllStudents,
    getStudentById ,
    checkEmailExists,
    addStudent,
    removeStudent,
    updateStudent,
    registerUser
}