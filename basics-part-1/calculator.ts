function calculator(
  number1: number,
  number2: number,
  operator: string
): number {
  let result: number;

  if (operator === "+") {
    result = number1 + number2;
  } else if (operator === "-") {
    result = number1 - number2;
  } else if (operator === "*") {
    result = number1 * number2;
  } else if (operator === "/") {
    result = number1 / number2;
  } else {
    throw new Error("Invalid operator");
  }

  return result;
}

console.log(calculator(2, 4, "*")); // expect 8

// console.log(calculator(2, 3, ".")); // Invalid operator`
