// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate password function
function generatePassword() {
  // Character length information including prompt and an alert and a return if character range boundaries are not met
  var length = prompt("How many characters would you like to include?");
  if (length <8 || length > 128) {
    alert("must be between 8-128 characters")
    return generatePassword()
  }

  // Lowercase characters variable and its confirmation prompt
  var hasLowercase = confirm("would you like to include lowercase letters?");
  // Uppercase characters variable and its confirmation prompt
  var hasUppercase = confirm("Would you like to include uppercase letters?");
  // Numbers characters variable and its confirmaiton prompt
  var hasNumbers = confirm("Would you like to include numbers?");
  // Symbols characters variable and its confirmation prompt
  var hasSymbols = confirm("Would you like to include symbols?");
  
  
  // Available characters variable string
  var availableCharacters = "";

  // Conditional statment, adding lowercase letters to available characters, to populate in the password
  if(hasLowercase) {
    availableCharacters += 'abcdefghijklmnopqrstuvwxyz';
  }

  // Conditional statement, adding uppercase letters to available characters, to populate in the password
  if(hasUppercase) {
    availableCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  // Conditional statement, adding numbers to available characters, to populate in the password
  if(hasNumbers) {
    availableCharacters += '123456789';
  }

  // Conditional statement, adding symbols to available characters, to populate in the password
  if(hasSymbols) {
    availableCharacters += '!@#$%^&*';
  }

  // Password variable string
  var password = "";

  for (let i = 0; i < length; i++) {
    var randomNumber = Math.floor(Math.random()* availableCharacters.length)
    var randomLetter = availableCharacters[randomNumber]
    password += randomLetter 

  }
  // Password populates
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
