let email = document.getElementById("email");
let pwd = document.getElementById("password");
let phoneno = document.getElementById("phoneno");
// let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let country = document.getElementById("country");
let error = document.getElementById("emailerror");
let pwderror = document.getElementById("pwderror");
let phoneerror = document.getElementById("phoneerror");
let fnameerror = document.getElementById("fnameerror");

let emailformat=/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
let pwdformat=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{6,}$/; 
let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,}))')
let phoneformat=/^\d{3}[-| |\.]?\d{3}[-| |\.]?\d{4}$/;
let nameformat=/^[a-zA-Z]+$/; 
function validate(){

     if(!emailformat.test(email.value.trim())){
        return false;
    }
    else if(!pwdformat.test(pwd.value.trim())){
        return false;
    }
    else if(!phoneformat.test(phoneno.value.trim())){
        return false;
    }
    else{return true;}

}
function emaillabel(){
    if(emailformat.test(email.value.trim())){
        email.style.border = "medium solid green";
    }
    else if(!emailformat.test(email.value.trim())){
        error.innerHTML = "Invalid";
        error.style.color = "red";
        email.style.border = "medium solid red";
    }    
}

 let timeout;

    function StrengthChecker(PasswordParameter){

        if(strongPassword.test(PasswordParameter)) {
            pwderror.style.color = "green"
            pwderror.innerHTML = 'Strong'
            pwd.style.border = "medium solid green";

        } else if(mediumPassword.test(PasswordParameter)){
            pwderror.style.color = 'yellow'
            pwderror.innerHTML = 'Medium'
            pwd.style.border = "medium solid yellow";

        } else{
            pwderror.style.color = 'red'
            pwderror.innerHTML = 'Weak'
            pwd.style.border = "medium solid red";

        }
    }


    pwd.addEventListener("input", () => {


        pwderror.style.display= 'block'
        clearTimeout(timeout);


        timeout = setTimeout(() => StrengthChecker(pwd.value), 500);


        if(pwd.value.length !== 0){
            pwderror.style.display != 'block'
        } else{
            pwderror.style.display = 'none'
        }
    });


function phonelabel(){
    if(phoneformat.test(phoneno.value.trim())){
        phoneno.style.border = "medium solid green";

    }
    else if(!phoneformat.test(phoneno.value.trim())){
        phoneerror.innerHTML = "Invalid Phone Number";
        phoneerror.style.color = "red";
        phoneno.style.border = "medium solid red";
    }
    
}

function alphalabel(x){
    let fname = document.getElementById(`${x}`);

    if(nameformat.test(fname.value.trim())){
        eval(`${x}.style.border = "medium solid green"`);

    }
    else if(!nameformat.test(fname.value.trim())){
        eval(`${x}error.innerHTML = "Invalid"`);
        eval(`${x}error.style.color = "red"`);
        eval(`${x}.style.border = "medium solid red"`);
    }
}
function regvalidate(){

    if(!emailformat.test(email.value.trim())){
       return false;
   }
   else if(!pwdformat.test(pwd.value.trim())){
       return false;
   }
   else if(!nameformat.test(fname.value.trim())){
    return false;
   }
   else if(!nameformat.test(lname.value.trim())){
        return false;
    }   
    else if(!nameformat.test(country.value.trim())){
        return false;
    }
    else{return true;}

}