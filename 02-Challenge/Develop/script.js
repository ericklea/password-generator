// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*"];




function generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols) {
  
  var length = prompt("How many characters would you like to include?");
  if(length < 8 || length > 128) {
    alert("Must include 8-128 characters")
  }
  
  if(length >= 8 && length =< 128) {
  var lowerLetters = prompt("would you like to include lowercase letters?");
  var upperLetters = prompt("Would you like to include uppercase letters?");
  var numbers = prompt("Would you like to include numbers?");
  var symbols = prompt("Would you like to include symbols?");
  }

  var availableCharacters = [];

  if(hasLowercase) {
    availableCharacters = [lowerLetters];
  }

  
  if(hasUppercase) {
    availableCharacters = [upperLetters];
  }

  
  if(hasNumbers) {
    availableCharacters = [numbers];
  }


  if(hasSymbols) {
    availableCharacters = [symbols];
  }

  var password = [];
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
