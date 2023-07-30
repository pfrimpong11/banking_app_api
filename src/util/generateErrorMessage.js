
 const createMessage =  (queryObj)=>{

    let message =  ``;
    let first_msg =  true;
    let count = 0
  

     for (const [key, value] of Object.entries(queryObj)) {
        
        if (first_msg && Object.keys(value).length > 0)
        {
            first_msg = false;
            message+= `${key} `;
            ++count;
        }
        else if (!first_msg && Object.keys(value).length > 0){
            message += `, ${key}`;
            ++count;
        }
     }

     (count > 1) ? message += " are not available" : (count == 1)? message += " is not available" : message+="";

     return message;


}


module.exports = createMessage