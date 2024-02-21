//Palindrom checker
function isPalindrome(string) {
  return string === string.split("").reverse().join("");
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

//Excute the function

function checkPalindrome() {
  var inputString = document.getElementById("inputString").value;
  var resultElement = document.getElementById("result");

  if (isPalindrome(inputString)) {
    resultElement.textContent = inputString + " is a palindrome.";
  } else {
    resultElement.textContent = inputString + " is not a palindrome";
  }
}

