
//arrays for password

var lowerCase = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'
];

var upperCase = [
  'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'
];

var numbers = [
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

var specialChar = [
  '@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'
];

function getPasswordOptions() {
  var length = parseInt(
    prompt('How many characters would you like?')
  );

  // checking that password is between 8 and 128 characters
  if (length < 8) {
    alert('Password length must be at least 8 characters');
    return;
  }

  if (length > 128) {
    alert('Password length must less than 129 characters');
    return;
  }

//ask what to include
  var hasLowerCase = confirm(
    'Do you want to include lowercase letters?'
  );

  var hasUpperCase = confirm(
    'Do you want to include uppercase letters?'
  );

  var hasNumbers = confirm(
    'Do you want to include numbers?'
  );

  var hasSpecialChar = confirm(
    'Do you want to include special characters?'
  );

  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasNumbers === false &&
    hasSpecialChar === false
  ) {
    alert('Must select at least one character type');
    return;
  }


  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasNumbers: hasNumbers,
    hasSpecialChar: hasSpecialChar,
  };

  return passwordOptions;
}

//getting random characters
function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];

  return randElement;
}

function generatePassword() {
  var options = getPasswordOptions();
  var result = [];
  var possibleCharacters = [];
  var guaranteedCharacters = [];

  if (options.hasLowerCase) {
    possibleCharacters = possibleCharacters.concat(lowerCase);
    guaranteedCharacters.push(getRandom(lowerCase));
  }

  if (options.hasUpperCase) {
    possibleCharacters = possibleCharacters.concat(upperCase);
    guaranteedCharacters.push(getRandom(upperCase));
  }
  
  if (options.hasNumbers) {
    possibleCharacters = possibleCharacters.concat(numbers);
    guaranteedCharacters.push(getRandom(numbers));
  }

  if (options.hasSpecialChar) {
    possibleCharacters = possibleCharacters.concat(specialChar);
    guaranteedCharacters.push(getRandom(specialChar));
  }

  // loop for password length and options
  for (var i = 0; i < options.length; i++) {
    var possibleCharacter = getRandom(possibleCharacters);

    result.push(possibleCharacter);
  }

  for (var i = 0; i < guaranteedCharacters.length; i++) {
    result[i] = guaranteedCharacters[i];
  }

  return result.join('');
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

