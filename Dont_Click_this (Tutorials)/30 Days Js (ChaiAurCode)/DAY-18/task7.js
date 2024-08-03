function longestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let seen = {};
    for (let end = 0; end < str.length; end++) {
      if (seen[str[end]] !== undefined) {
        start = Math.max(start, seen[str[end]] + 1);
      }
      seen[str[end]] = end;
      maxLength = Math.max(maxLength, end - start + 1);
    }
    return maxLength;
  }
  
  console.log(longestSubstring("abcabcbb")); // Output: 3 (abc)