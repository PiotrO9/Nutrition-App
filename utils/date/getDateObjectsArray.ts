import DateObject from "../../types/DateObject";

const getDateObjectsArray = (): DateObject[] => {
  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(today.getDate() - 1);
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const weekDays: DateObject[] = [
    {
      weekDate: getWeekDayInPolishInXDays(-2),
      dayName: "Przedwczoraj",
    },
    {
      weekDate: getWeekDayInPolish(yesterday),
      dayName: "Wczoraj",
    },
    {
      weekDate: getWeekDayInPolish(today),
      dayName: "Dzisiaj",
    },
    {
      weekDate: getWeekDayInPolish(tomorrow),
      dayName: "Wczoraj",
    },
    {
      weekDate: getWeekDayInPolishInXDays(2),
      dayName: "Pojutrze",
    },
  ];

  return weekDays;
};

function getWeekDayInPolish(date: Date): string {
  const days = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  return days[date.getDay()];
}

function getWeekDayInPolishInXDays(offset: number): string {
  const date = new Date();
  date.setDate(date.getDate() + offset);
  return getWeekDayInPolish(date);
}

export default getDateObjectsArray;
