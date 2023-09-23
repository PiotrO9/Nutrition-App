import codeError from "../../enums/alertType";

const getAlertClass = (code: number): codeError => {
  let result: codeError;

  switch (code) {
    case 200: {
      result = codeError.OK;
      break;
    }
    default: {
      result = codeError.ERROR;
      break;
    }
  }

  return result;
};

export default getAlertClass;
