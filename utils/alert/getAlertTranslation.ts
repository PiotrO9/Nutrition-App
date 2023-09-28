const getAlertTranslation = (message: string): string => {
  switch (message) {
    case "Invalid login credentials": {
      return "Nieprawidłowe dane logowania";
    }
    case "Email not confirmed": {
      return "Email nie został potwierdzony";
    }
    default: {
      return message;
    }
  }
};

export default getAlertTranslation;
