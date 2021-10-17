// Assignment code here
var generateBtn = document.querySelector("#generate");
  


// Get references to the #generate element



function generatePassword(){

   window.confirm("Would you like upper case letters?");
   window.confirm("Would you like numbers?");
   window.confirm("Would you like lower case letters?");
   window.confirm("Would you like symbols?");

// Write password to the #password input
var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTRUVWXYZ";
var passwordLength = 20;
var pass = "";
for (var i = 0; i <= passwordLength; i++){
 var numberRandom = Math.floor(Math.random() * chars.length);
 pass += chars.substring(numberRandom , numberRandom +1);
}
return pass;
}





function writePassword() {

 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
}

//reveal the password onto the input



// Add event listener to generate button


generateBtn.addEventListener("click", writePassword);










