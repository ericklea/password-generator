// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*"];


function generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols) {
  var availableCharacters = [];

  var hasLowercase = prompt("Would you like to include lowercase letters?");
  if(hasLowercase) {
    availableCharacters = [lowerLetters];
  }

  var hasUppercase = prompt("Would you like to include uppercase letters?");
  if(hasUppercase) {
    availableCharacters = [upperLetters];
  }

  var hasNumbers = prompt("Would you like to include numbers?");
  if(hasNumbers) {
    availableCharacters = [numbers];
  }

  if(hasSymbols) {
    availableCharacters = [symbols];
  }
};
console.log(availableCharacters);

generatePassword(8,true,true,true,true);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
