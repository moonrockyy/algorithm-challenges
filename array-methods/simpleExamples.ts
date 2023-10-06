const numbers: number[] = [1, 2, 3, 4];

const doubledNumbers = numbers.map((num) => num * 2); // map
console.log("doubled numbers:", doubledNumbers);

const filteredNumbers = numbers.filter((num) => num > 2); // filters
console.log("filtered numbers:", filteredNumbers);

const sumOfNumbers = numbers.reduce((total, num) => {
  // reduce
  return total + num;
}, 0);

console.log("sum of numbers:", sumOfNumbers);

const tripledNumbers: number[] = [];
numbers.forEach((num) => {
  // forEach
  tripledNumbers.push(num * 3);
});

console.log("tripled numbers:", tripledNumbers);

const findNumbers = numbers.find((num) => num > 2); //find

console.log("first number bigger than 2:", findNumbers);

const hasEvenNumbers = numbers.some((num) => num % 2 === 0);
console.log("has even number:", hasEvenNumbers);

const allEvenNumbers = numbers.every((num) => num % 2 === 0);
console.log("are all numbers even:", allEvenNumbers);
