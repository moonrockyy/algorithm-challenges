function highestScoringWord(text: string): string {
  const words: string[] = text.split(" ");

  const scores: number[] = words.map((word: string) => {
    let score: number = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  let highestScore: number = 0;
  let highestIndex: number = 0;

  for (let i: number = 0; i < scores.length; i++) {
    if (scores[i] > highestScore) {
      highestScore = scores[i];
      highestIndex = i;
    }
  }

  return words[highestIndex];
}

console.log(highestScoringWord("Hello my name is xavier"));
