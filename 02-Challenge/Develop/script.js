// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*"];



function generatePassword() {

  var plength = prompt("How many characters would you like to include?")

  var charlowercase = prompt("Would you like to include lowercase characters?")

  var charuppercase = prompt("Would you like to include uppercase characters")

  var charnumberic = prompt("Would you like to include numeric characters?")

  var charspecial = prompt("Would you like to include special characters?")

  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
