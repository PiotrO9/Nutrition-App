import codeError from "../../enums/alertType";

const getAlertClass = (code: number): codeError => {
  switch (code) {
    case 200:
      return codeError.OK;
    default:
      return codeError.ERROR;
  }
};

export default getAlertClass;
