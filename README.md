# Hi There ✋!
### You can find javaScript Interview Questions and Solution:
#### 1. JavaScript function to check if a given string is a palindrome
```
function isPalindrome(str) {
  return str === str.split('').reverse().join('');
}

console.log(isPalindrome("racecar")); // Output: true
console.log(isPalindrome("hello"));   // Output: false
```
This code defines a function called isPalindrome that takes a string str as input. Inside the function, it checks if the given string is a palindrome or not. It does this by comparing the original string str with its reversed version. If they are equal, it means the string is a palindrome, and the function returns true; otherwise, it returns false.

In the first console.log statement, the function isPalindrome is called with the string "racecar", which is indeed a palindrome. So, the function returns true. In the second console.log statement, the string "hello" is not a palindrome, so the function returns false.
##### Read Full ➡️ https://medium.com/@ashadullahalforhad/write-a-javascript-function-to-check-if-a-given-string-is-a-palindrome-reads-the-same-forwards-and-c8acaace3c24
