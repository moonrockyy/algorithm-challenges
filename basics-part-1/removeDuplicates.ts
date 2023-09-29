function removeDuplicates(arr: any[]): any[] {
  let uniqueArr = new Set(arr);

  return Array.from(uniqueArr);
}

console.log(removeDuplicates([1, "hello", 2, 3, true, 1, 1, true, "hello"]));
