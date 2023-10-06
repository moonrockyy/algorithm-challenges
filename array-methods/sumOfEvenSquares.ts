function sumOfEvenSquares(arr: number[]): number {
  const evenNumbers = arr.filter((num) => num % 2 === 0);
  const squaredEvenNumbers = evenNumbers.map((num) => num ** 2);
  const sumOfEvenSquareNumbers = squaredEvenNumbers.reduce(
    (total, num) => total + num,
    0
  );

  return sumOfEvenSquareNumbers;
}

console.log(sumOfEvenSquares([1, 2, 3, 4])); // 20
