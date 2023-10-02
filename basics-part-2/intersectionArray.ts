function intersectionArray(arrayOne: number[], arrayTwo: number[]): number[] {
  let uniqueArrayOne = new Set(arrayOne);
  let intersectedArray: number[] = [];

  for (let i = 0; i < arrayTwo.length; i++) {
    if (uniqueArrayOne.has(arrayTwo[i])) {
      intersectedArray.push(arrayTwo[i]);
    }
  }

  return intersectedArray;
}

console.log(intersectionArray([1, 1, 1], [2, 2, 2])); // expect []
