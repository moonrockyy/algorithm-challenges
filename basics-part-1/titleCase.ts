function titleCase(text: string) {
  const textArray = text.split(" ");
  let finalText = "";

  for (let i = 0; i < textArray.length; i++) {
    finalText += textArray[i][0].toUpperCase();
    finalText += textArray[i].slice(1).toLowerCase();
    finalText += " ";
  }

  return finalText;
}

console.log(titleCase("SalAm maMad chetorI")); // expect Salam Mamad Chetori
