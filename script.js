// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {

// password variables

var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];

// empty array variables
 
var resultArray = [];
var userArray = [];

uppercaseArray [1]

// prompt variables
var numCharacter = prompt ("How many character do you want your password to be between 8 and 128?");
var numbers = confirm ("Do you want numbers in your password? Click OK for yes and Cancel for no.");
var uppercases = confirm ("Do you want uppercase characters in your password? Click OK for yes and Cancel for No.");
var lowercases = confirm ("Do you want lowercase characters in your password? Click OK for yes and Cancel for No");
var characters = confirm ("Do you want special characters in your password? Click OK for yes and Cancel for No");

// conditions of the array
if (numbers){
  resultArray = resultArray.concat(numbArray);
}

if (uppercases){
  resultArray = resultArray.concat(uppercaseArray);
}

if (lowercases){
  resultArray = resultArray.concat(lowercaseArray);
}

if (characters){
  resultArray = resultArray.concat(characterArray);
}
console.log(resultArray)


for (var i = 0; i < numCharacter; i++) {
  userArray.push (resultArray[Math.floor(Math.random() * resultArray.length)]); 
  }
  return userArray.join("") ;
}

// function that writes password in password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyToClipboard() {
}

// calls generate password prompts
generateBtn.addEventListener("click", writePassword);
