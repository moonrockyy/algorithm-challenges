function findMax(array: number[]): number {
  let maxNumber: number = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxNumber) {
      maxNumber = array[i + 1];
    }
  }

  return maxNumber;
}

console.log(findMax([5, 2, 3, 5, 4])); //expect 5
