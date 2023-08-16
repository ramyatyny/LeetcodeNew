import React, { useState } from 'react';

const validateEmail = (emailString) => {
     var atSymbol = emailString.indexOf('@');
    if(atSymbol < 1) return false

    var dotNotation = emailString.indexOf('.');
    if(dotNotation <= atSymbol + 3 ) return false;

    if(dotNotation === emailString.length - 1) return false;
    return true;
}

const EmailValidation = ()=>{
    const[email,setEmail] =useState();
    const[isValid,setIsValid] = useState(null);
    
    const handleEmail =() =>{
         setEmail(e.target.value);               
    })

    const validationEmail = ()=>{
        const isValidemail = validateEmail(email);
        setIsValid(isValidemail)
    }
    return(
        <input type='text' value= {email} onchange = {handleEmail} />
        <Button onClick={validationEmail}>Validation</Button>
        {isValid ? <p> Email is valid </p> : <p>Email is Invalidl</p>}
    )
}