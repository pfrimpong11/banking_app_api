export function generateAccountNumber() {
    var accountNumber = "";
    var numbers = []; // Array to store generated account numbers
  
    while (accountNumber.length < 13) {
      // Generate a random digit from 0 to 9
      var digit = Math.floor(Math.random() * 10);
  
      // Append the digit to the account number string
      accountNumber += digit;
  
      // Check if the account number already exists
      if (numbers.includes(accountNumber)) {
        // Remove the duplicated number and reset the account number string
        accountNumber = "";
      }
    }
  
    // Add the unique account number to the array of generated numbers
    numbers.push(accountNumber);
  
    return accountNumber;
  }
  
  // Generate a unique account number

  