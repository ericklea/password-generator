// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

  var plength = prompt("Password: must be between 8 - 128 characters")
  if (plength < 8 || plength > 128 ) {
  }

  var charlowercase = prompt("Would you like to include lowercase characters?")

  var charuppercase = prompt("Would you like to include uppercase characters")

  var charnumberic = prompt("Would you like to include numeric characters?")

  var charspecial = prompt("Would you like to include special characters?")
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
