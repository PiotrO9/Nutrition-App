const getAlertTranslation = (message: string): string => {
  let result = "";

  switch (message) {
    case "Invalid login credentials": {
      result = "Nieprawidłowe dane logowania";
      break;
    }
    case "Email not confirmed": {
      result = "Email nie został potwierdzony";
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
