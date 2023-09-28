import passwordFactors from "../../enums/passwordFactors";

const validatePassword = (password: string): passwordFactors[] => {
  const missingFactors: passwordFactors[] = [];

  if (!/(?=.*[a-z])/.test(password)) {
    missingFactors.push(passwordFactors.LowercaseLetter);
  }

  if (!/(?=.*[A-Z])/.test(password)) {
    missingFactors.push(passwordFactors.UppercaseLetter);
  }

  if (!/(?=.*\d)/.test(password)) {
    missingFactors.push(passwordFactors.Digit);
  }

  if (!/(?=.*[@$!%*?&])/.test(password)) {
    missingFactors.push(passwordFactors.SpecialCharacter);
  }

  if (password.length < 6) {
    missingFactors.push(passwordFactors.Length);
  }

  return missingFactors;
};

export default validatePassword;
