function formatPhoneNumber(arr: number[]): string {
  const joinedNumber = arr.join("");

  const firstPart = joinedNumber.slice(0, 3);
  const secondPart = joinedNumber.slice(3, 6);
  const thirdPart = joinedNumber.slice(6, 10);

  return `(${firstPart}) ${secondPart}-${thirdPart}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
