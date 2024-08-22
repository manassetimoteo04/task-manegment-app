//FUNCTION FOR SETTING THE CALENDAR DAYS

export const settingArrDays = function () {
  const today = new Date().getDate();
  const daysBefore = Array.from(
    { length: 7 },
    (_, i) => today - (i + 1)
  ).reverse();
  const daysAfter = Array.from({ length: 7 }, (_, i) => today + (i + 1));
  console.log(daysBefore);
  return [...daysBefore, today, ...daysAfter];
};

export function formateDate(date) {
  const options = {
    // hour: "numeric",
    // minute: "numeric",
    day: "numeric",
    month: "long",
    // year: "numeric",
    weekday: "long",
  };
  // const locale = navigator.language;
  // console.log(locale);

  return new Intl.DateTimeFormat("EN", options).format(date);
}
export function formatHour(date) {
  const hour = date.getHours();
  const min = date.getMinutes();
  const secs = date.getSeconds();
  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
    secs < 10 ? `0${secs}` : secs
  }`;
}
