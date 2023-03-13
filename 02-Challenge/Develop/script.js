// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerLetters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = [0,1,2,3,4,5,6,7,8,9];
var symbols = ["!","@","#","$","%","^","&","*"];




function generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols) {
  
  var length = prompt("How many characters would you like to include?");
  if (length <8 || length > 128) {
    alert("must be between 8-128 characters")
    return generatePassword()
  }
  var hasLowercase = confirm("would you like to include lowercase letters?");
  var hasUppercase = confirm("Would you like to include uppercase letters?");
  var hasNumbers = confirm("Would you like to include numbers?");
  var hasSymbols = confirm("Would you like to include symbols?");
  

  var availableCharacters = "";

  if(hasLowercase) {
    availableCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  
  if(hasUppercase) {
    availableCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  
  if(hasNumbers) {
    availableCharacters += '123456789';
  }


  if(hasSymbols) {
    availableCharacters += '!@#$%^&*';
  }
  var password = "";
  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random()* availableCharacters.length)
    var randomLetter = availableCharacters[randomNumber]
    password += randomLetter 

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
