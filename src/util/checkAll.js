
export const verifyAll = (args)=>{
     
    const required = [];
   for (const param of args) {

    if(param.length==0){
        required.push(param)
    }
   }
   
}