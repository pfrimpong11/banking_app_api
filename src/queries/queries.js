

//GET 
const getAllCustomers = "SELECT * FROM customer"

const getByAccountNumber  = "SELECT * FROM customer WHERE  account_number = $1"
const getByGhanaCard =  "SELECT * FROM customer WHERE ghana_card_number = $1"
const getById =  "SELECT * From customer WHERE _id =  $1"

const getByEmail_GhanaCard_Phone = "SELECT * FROM customer WHERE email = $1 OR ghana_card_number = $2 OR phone = $3"

const getByEmail =  "SELECT  * FROM customer WHERE email = $1"
const getByFirstName_LastName_Email = "SELECT  first_name, last_name, email, password, _id FROM customer WHERE first_name = $1 AND last_name = $2 AND email = $3"

const getByPhoneNumber =  "SELECT * FROM customer WHERE phone = $1"

// const get =  "SELECT * FROM students WHERE email = $1"
const checkEmailExists = "SELECT * FROM customer  WHERE email =  $1"

const getAllTransactions = ""
//POST
const addStudent= "INSERT INTO students (name,email,dob,age) VALUES ($1, $2, $3, $4);"

//DELETE
const removeStudent = "DELETE FROM customer WHERE id = $1"

//UPDATE
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2"

//AUTH
const registerUser  = "INSERT INTO customer ( first_name , last_name , dob , phone , email , address , ghana_card_number ,account_number,password) VALUES( $1, $2, $3, $4, $5, $6, $7, $8, $9);"



// TRANSACTIONS

const checkBalance = "SELECT balance FROM customer WHERE _id = $1"

const isTransactionPossible = "SELECT balance FROM customer WHERE _id = $1 AND  balance >= $2"

const debitAccount =  `
UPDATE customer SET balance = balance - $2 WHERE account_number = $1;
`
const creditAccount =  `
UPDATE customer SET balance = balance + $2 WHERE account_number = $1;
`

// SUDO



export const queries={
    getAllCustomers,
    getByEmail,
    getByAccountNumber,
    getById,
    checkEmailExists,
    removeStudent,
    updateStudent,
    registerUser,
    getByPhoneNumber,
    getByGhanaCard,
    checkEmailExists,
    getByFirstName_LastName_Email,
    getByEmail_GhanaCard_Phone,
    checkBalance,
    creditAccount,
    debitAccount
}