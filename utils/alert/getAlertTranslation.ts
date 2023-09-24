const getAlertTranslation = (message: string): string => {
  let result = "";

  switch (message) {
    case "Invalid login credentials": {
      result = "Nieprawidłowe dane logowania";
      break;
    }
    default: {
      result = message;
      break;
    }
  }

  return result;
};

export default getAlertTranslation;
