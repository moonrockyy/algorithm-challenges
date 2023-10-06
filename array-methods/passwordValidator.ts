function passwordValidator(password: string): boolean {
  if (password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/))
    return true;
  else return false;
}

console.log(passwordValidator("Pass1234"));
