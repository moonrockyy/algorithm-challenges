function rollADice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

interface Type {
  results: { dice1: number; dice2: number; sum: number; result: string }[];
}

function diceGameSimulation(numOfDice: number): {}[] {
  const results: Type["results"] = [];

  for (let i = 0; i < numOfDice; i++) {
    let result = "";

    const dice1 = rollADice();
    const dice2 = rollADice();

    const sum = dice1 + dice2;

    if (sum === 7 || sum === 11) {
      result = "the user win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "the user lose";
    } else {
      result = "roll a dice again";
    }

    results.push({ dice1, dice2, sum, result });
  }

  return results;
}

console.log(diceGameSimulation(3));
