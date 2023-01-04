import { fromUnixTime, format } from "date-fns";

//Return hour: xx:xx am/pm
export const fromUnixTimeToHours = (unix: number) => {
  const date = fromUnixTime(unix);
  const hour = format(date, "HH:mm aaa");
  return hour;
};

//Return: Day(Name), Day(number) Month Year
export const fromUnixtimeToDayNumberAndYear = (unix: number) => {
  const date = fromUnixTime(unix);
  const returnedData = format(date, "EEEE, d LLLL yyyy");
  return returnedData;
};

export const fromUnixTimeToLocalTime = (unix: number) => {
  const date = fromUnixTime(unix);
  const localTime = format(date, "HH:mm a");
  return localTime;
};
