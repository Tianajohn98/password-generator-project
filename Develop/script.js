// Assignment code here

// alphabet range for password
var alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
//numeric values for password
var num = "0123456789";

//symbols for password
var sym = "!@#$%^&*+=-_";


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
 
 passLength = window.prompt("write a number between 8 and 132  for your password");
  
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;

}

function generatePassword () {

  

}

// Add event listener to generate button





generateBtn.addEventListener("click", writePassword);
