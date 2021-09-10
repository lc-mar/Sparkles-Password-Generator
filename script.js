// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_";
var passwordChars;

function generatePassword() {
  let passwordValue = "";
  // passwordChars.charAt(i)

  return passwordValue
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
