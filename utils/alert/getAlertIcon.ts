const getAlertIcon = (code: number): string => {
  switch (code) {
    case 200:
      return "icon-park-solid:success";
    default:
      return "ooui:error";
  }
};

export default getAlertIcon;
