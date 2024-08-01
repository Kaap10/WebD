function isPalindrome(str) {
    // Base Case 1
    if (str.length <= 1) {
      return true;
    }
  
    // Base Case 2
    if (str[0] !== str[str.length - 1]) {
      // If first and last char of string are not same, string is not palindrome
      return false;
    }
  
    // Recursive Relation
    let recursionAns = isPalindrome(str.slice(1, str.length - 1));
    return recursionAns;
  }
  
  console.log(isPalindrome("racecar")); // true
  console.log(isPalindrome("hello")); // false