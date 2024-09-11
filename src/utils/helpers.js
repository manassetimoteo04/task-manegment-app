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
export const getToday = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};
const calcDiference = (date1, date2, unit) => {
  const unities = {
    minute: 1000 * 60,
    hour: 1000 * 60 * 60,
    day: 1000 * 60 * 60 * 24,
  };
  return Math.round(Math.abs(date1 - date2) / unities[unit]);
};
export const formateMessageDate = (date) => {
  const now = new Date(date);

  const calcDays = calcDiference(new Date(), now, "day");
  if (calcDays < 1) {
    return formatHour(now).slice(0, -3);
  }

  if (calcDays >= 0 && calcDays < 2) {
    return "ontem";
  }
  if (calcDays >= 2 && calcDays < 8) {
    const options = {
      weekday: "long",
    };

    return new Intl.DateTimeFormat("pt-PT", options).format(now).slice(0, -6);
  }
  return new Intl.DateTimeFormat("pt-PT").format(now);
};
export const formatMessageGrouping = (entry) => {
  const calcDays = calcDiference(new Date(), new Date(entry), "day");
  if (calcDays === 1) {
    return "ontem";
  }
  if (calcDays === 0) {
    return "hoje";
  }
  return new Intl.DateTimeFormat("pt-PT").format(new Date(entry));
};
