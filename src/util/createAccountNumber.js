export function generateAccountNumber() {
    const bankCode = '140'; 
    const branchCode = '22'; 
    const accountNumberLength = 10; 

    const randomNumber = Math.floor(Math.random() * Math.pow(10, accountNumberLength));
     
    const accountNumber = `${bankCode}${branchCode}${randomNumber.toString().padStart(accountNumberLength, '0')}`;
    
    return accountNumber;
 
  }
  
