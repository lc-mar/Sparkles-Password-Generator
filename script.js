
var generateBtn = document.querySelector("#generate");
var lowercase ="abcdefghijklmnopqrstuvwxyz";
var uppercase ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";
var special = "!@#$%^&*()_";
var passwordChars;


function enterPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
debugger;

function writePassword(){
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);

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

  var hasUppercase = confirm("Include uppercase letters?");
  var hasLowercase = confirm("Include lowercase letters?");
  var hasNumber = confirm("Include numbers?");
  var hasSpecial = confirm("Include special characters?");

  if(!hasUppercase&&!hasLowercase&&!hasNumber&&!hasSpecial){
    alert("You must choose at least 1 character type ti cibtubye!");
    return generatePassword()
  }
  if(hasUppercase){
    passwordChars += uppercase
  }

  if(hasLowercase){
    passwordChars += lowercase
  }

  if(hasNumber) {
    passwordChars += number
  }

  if(hasSpecial) {
    passwordChars += special
  }

  for (var i = 0; i < length; i++) {
    result += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
  }
  return result;
  
  }