
var lowercase = "";
var uppercase = "";
var numbers = "";
var special = "";
var characters = "";
var length = "";

// Ask user how long they need the password to be
var askLength = function() {

length = window.prompt(
  "How many characters does your password need? Please enter a number between 8 and 128."
);

// Convert response to number
length = parseInt(length);

// If it falls within parameters, move on to types function
if (length >= 8 && length <= 128) {
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

       //ask uppercase
    var confirmUppercase = window.confirm("Do you want to include uppercase letters?");

    //if so, add values
    if (confirmUppercase) {
      uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    
    //ask numbers
    var confirmNumbers = window.confirm("Do you want to include numbers?");

    //if so, add values
    if (confirmNumbers) {
      numbers = "0123456789";
    }
    
    //ask special
    var confirmSpecial = window.confirm("Do you want to include special characters?");
    // if so, add values
    if (confirmSpecial) {
      special = "!#$%&*^+~/?@-_";
    }
  
    // if all are false, alert and return to beginning
    if (!confirmLowercase && !confirmUppercase && !confirmNumbers && !confirmSpecial) {
      window.alert("Please say OK for at least one category.");
      return askTypes();
    }

    // add all values together in one string
    characters = lowercase + uppercase + numbers + special;

};


//password generator...how to I use variables correctly?
var generatePassword = function() {
   var password = "";

  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * characters.length);
    password += characters.substring(randomNumber, randomNumber +1);
  }

  return password;

// am I missing anything else here? How will it run with the next function? 

}



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  askLength();

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
