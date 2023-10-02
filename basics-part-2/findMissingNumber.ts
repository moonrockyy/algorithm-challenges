function findMissingNumber(arr: number[]): number {
  if (arr.length === 0) return 1;

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  //   let actualSum = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     actualSum += arr[i];
  //   }
  const actualSum = arr.reduce((sum: number, num: number) => sum + num, 0);

  return Math.abs(expectedSum - actualSum);
}

console.log(findMissingNumber([10, 8, 6, 9, 5, 4, 2, 3, 1]));
