function validAnagrams(str1: string, str2: string) {
  const str1Array = str1.split("");
  const str1Object: { [key: string]: number } = {};

  str1Array.forEach((char) => {
    str1Object[char] = (str1Object[char] || 0) + 1;
  });

  const str2Array = str2.split("");
  const str2Object: { [key: string]: number } = {};

  str2Array.forEach((char) => {
    str2Object[char] = (str2Object[char] || 0) + 1;
  });

  return Object.keys(str1Object).every(
    (char) => str1Object[char] === str2Object[char]
  );
}

console.log(validAnagrams("app", "ppa")); //true
