function isPalindrome(text: string): boolean {
  let formattedStr = text.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = formattedStr.split("").reverse().join("");

  return formattedStr === reversedStr;
}

console.log(isPalindrome("racecar")); // expect true
console.log(isPalindrome("racescar")); // expect false
