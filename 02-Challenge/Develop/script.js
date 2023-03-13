// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
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

  }
  return password 
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
