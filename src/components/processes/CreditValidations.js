
  const ValidateName = (event) =>{
    const name = event.target.value
    if(name == "" || name == null  || name.length < 3 ){        
        return false
     } else{
         return true
     }
}

const ValidateCredit = (event) =>{
    const credit = event.target.value
    if(credit < 0 || isNaN(credit) || credit < 500000 || credit > 10000000000){
        return false
     } else{
         return true
     }
} 

export {ValidateName, ValidateCredit}