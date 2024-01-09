var user = [];
user = JSON.parse(localStorage.getItem("users"));

 var emailUsername =document.getElementById ("emailUsername").value;
  var passwordUser =document.getElementById ("passwordUser").value;
   



document.getElementById("log in").addEventListener('click', function () {
    if (emailUsername.value == '' || passwordUser.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center text-danger'>All inputs is required</p>`;
    
       return;
    }
})


                
       
    

      