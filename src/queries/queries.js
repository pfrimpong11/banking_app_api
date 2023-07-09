

//GET 
const getAllCustomers = "SELECT * FROM customer"

const getByGhanaCard =  "SELECT * FROM customer WHERE ghana_card_number = $1"
const getByEmail_GhanaCard_Phone = "SELECT * FROM customer WHERE email = $1 OR ghana_card_number = $2 OR phone = $3"
const getByFirstName_LastName_Email = "SELECT  first_name, last_name, email, password, _id FROM customer WHERE first_name = $1 AND last_name = $2 AND email = $3"

const getByPhoneNumber =  "SELECT * FROM customer WHERE phone = $1"

// const get =  "SELECT * FROM students WHERE email = $1"
const checkEmailExists = "SELECT * FROM customer  WHERE email =  $1"

//POST
const addStudent= "INSERT INTO students (name,email,dob,age) VALUES ($1, $2, $3, $4) "
//DELETE
const removeStudent = "DELETE FROM customer WHERE id = $1"
//UPDATE
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2"

//AUTH
const registerUser  = "INSERT INTO customer ( first_name , last_name , dob , phone , email , address , ghana_card_number ,account_number,password) VALUES( $1, $2, $3, $4, $5, $6, $7, $8,$9);"
export const queries={
    // getAllStudents,
    // getStudentById ,
    checkEmailExists,
    // addStudent,
    removeStudent,
    updateStudent,
    registerUser,
    getByPhoneNumber,
    getByGhanaCard,
    checkEmailExists,
    getByFirstName_LastName_Email,
    getByEmail_GhanaCard_Phone
}