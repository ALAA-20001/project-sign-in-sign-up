var fullnameInput = document.getElementById("Full Name");
var usernameInput = document.getElementById("Username");
var emailInput = document.getElementById("Email");
var passwordInput = document.getElementById("Password");
var confirmPasswordInput = document.getElementById("Confirm password");

var userContainer=[];
function newUser(){
 
    if (validateEmail()==true && validatePassword()==true){
        if(checkConfirm()==true){
            var user={   
                fullName:fullnameInput.value,
                userName:usernameInput.value,
                email:emailInput.value,
                password:passwordInput.value,
                confirmpassword:confirmPasswordInput.value
            }
                userContainer.push(user);
                localStorage.setItem("users",JSON.stringify(userContainer))
                clearForm();
                console.log(userContainer);
        }
        else{
            alert ("Passwords are not identical please enter the same passwords")
        }
    }

    else{
        alert("Email or Password may be wrong, please enter valid data.")
    }
}

function validateEmail(){
    let Email_regex= /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
    
    
    if (Email_regex.test (emailInput.value)==true) {
        return true;
    }
    else{
        return false;
   
}
}
function validatePassword(){

    let Password_regex=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

    if (Password_regex.test (passwordInput.value) ==true){
     return true;
    }
    else{
        return false;
    }
}
 
function clearForm(){
    fullnameInput.value="";
    usernameInput.value="";
    emailInput.value="";
    passwordInput.value="";
    confirmPasswordInput.value="";
}

function checkConfirm(){
    if (passwordInput.value==confirmPasswordInput.value){
        return true;
    }
    else{
        return false;
    }
}