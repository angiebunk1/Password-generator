// Assignment code here


// Ask user how long they need the password to be
var askLength = function() {

var promptLength = window.prompt(
  "How many characters does your password need? Please enter a number between 8 and 128."
);

// Convert response to number
promptLength = parseInt(promptLength);

// If it falls within parameters, move on to types function
if (promptLength >= 8 && promptLength <= 128) {
    askTypes();
}

// If it doesn't fall within parameters or doesn't qualify as a useable number, alert user to try again
else {
  window.alert("Please enter a number between 8 and 128.");
  return askLength();
}

};

// Ask user for types of characters needed in password
var askTypes = function() {

    // ask lowercase
    var confirmLowercase = window.confirm("Do you want to include lowercase letters?");

    //if so, add values
    if (confirmLowercase) {
      lowercase = "abcdefghijklmnopqrstuvwzyz";
    }

    //if not, add empty
    if (!confirmLowercase) {
      var lowercase = "";
    }

    //ask uppercase
    var confirmUppercase = window.confirm("Do you want to include uppercase letters?");

    //if so, add values
    if (confirmUppercase) {
      var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    //if not, add empty
    if (!confirmUppercase) {
      var uppercase = "";
    }

    //ask numbers
    var confirmNumbers = window.confirm("Do you want to include numbers?");

    //if so, add values
    if (confirmNumbers) {
      var numbers = "0123456789";
    }
    //if not, add empty
    if (!confirmNumbers) {
      var numbers = "";
    }

    //ask special
    var confirmSpecial = window.confirm("Do you want to include special characters?");
    // if so, add values
    if (confirmSpecial) {
      var special = "!#$%&*^+~/?@-_";
    }
    //if not, add empty
    if (!confirmSpecial) {
      var special = "";
    }

    // if all are false, alert and return to beginning
    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
      window.alert("Please say OK for at least one category.");
      return askTypes();
    }

    // add all values together in one string
    var characters = lowercase + uppercase + numbers + special;

}


//password generator...how to I use variables correctly?
var generatePassword = function() {
  var char = characters;
  var length = promptLength;
  var password = "";

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * char.length);
    password += char.substring(randomNumber, randomNumber +1);
  }

// am I missing anything else here? How will it run with the next function? 

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
