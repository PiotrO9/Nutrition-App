const getAlertIcon = (code: number): string => {
  let result: codeError;

  switch (code) {
    case 200: {
      result = "icon-park-solid:success";
      break;
    }
    default: {
      result = "ooui:error";
      break;
    }
  }

  return result;
};

export default getAlertIcon;