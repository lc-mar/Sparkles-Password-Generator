
var generateBtn = document.querySelector("#generate");
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_";
var passwordChars;


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
debugger;

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

generateBtn.addEventListener("click", generatePassword);

function generatePassword(){
  var result = "";
  var length = prompt("How many characters would you like in your randomly generated password? (between 8 and 128)");
  if(isNaN(length)){
    alert("NUMBER NEEDED");
    return generatePassword()
  }

  if(length<8 || length> 128){
    alert("Please select a number between 8 - 128!");
    return generatePassword()
  }

  if(hasUppercase){
    chosenCharacters += uppercase
  }
  
  if(hasLowercase){
    chosenCharacters += lowercase
  }

  if(hasNumber) {
    chosenCharacters += number
  }

  if(hasSpecial) {
    chosenCharacters += special
  }