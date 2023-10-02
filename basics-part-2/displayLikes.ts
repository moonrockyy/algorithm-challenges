function displayLikes(nameArrays: string[]) {
  if (nameArrays.length === 0) return "No one like this.";
  else if (nameArrays.length === 1) return `${nameArrays[0]} likes this.`;
  else if (nameArrays.length === 2)
    return `${nameArrays[0]} and ${nameArrays[1]} like this.`;
  else if (nameArrays.length === 3)
    return `${nameArrays[0]} and ${nameArrays[1]} and ${nameArrays[1]} like this.`;
  else
    return `${nameArrays[0]} and ${nameArrays[1]} and ${
      nameArrays.length - 2
    } others like this.`;
}

console.log(displayLikes(["mahan", "mamad"]));
console.log(displayLikes(["mahan", "mamad", "reza", "hossein", "mahdi"]));
