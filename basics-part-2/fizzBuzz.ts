function fizzBuzzArray(num: number) {
  let baseArray: (number | string)[] = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) baseArray.push("FizzBuzz");
    else if (i % 3 === 0) baseArray.push("Fizz");
    else if (i % 5 === 0) baseArray.push("Buzz");
    else baseArray.push(i);
  }

  return baseArray;
}

console.log(fizzBuzzArray(100));
