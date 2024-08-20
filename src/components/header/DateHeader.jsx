import { useEffect, useState } from "react";
function formateDate(date) {
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
function formatHour(date) {
  const hour = date.getHours();
  const min = date.getMinutes();
  const secs = date.getSeconds();
  return `${hour < 10 ? `0${hour}` : hour}:${min < 10 ? `0${min}` : min}:${
    secs < 10 ? `0${secs}` : secs
  }`;
}
function DateHeader() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, [date]);
  return (
    <div className="date-header">
      <h4>{formatHour(date)}</h4>
      <span>{formateDate(date)}</span>
    </div>
  );
}

export default DateHeader;
