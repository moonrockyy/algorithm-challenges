function areAllCharsUnique(arr) {
  const charCount = {};

  for (let i = 0; i < arr.length; i++) {
    if (charCount[arr[i]]) {
      return false;
    }
    charCount[arr[i]] = true;
  }

  return true;
}

console.log(areAllCharsUnique(['a', 'b', 'c', 'd', 'e', 'f', 'f']))