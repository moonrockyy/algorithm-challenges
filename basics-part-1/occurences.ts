function countOccurences(word: string, letter: string): number {
  let count: number = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) count++;
  }

  return count;
}

console.log(countOccurences("Salam", "a")); // expect 2
