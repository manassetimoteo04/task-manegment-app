function getDay(day) {
  const options = {
    weekday: "long",
  };
  const date = new Date().setDate(day);
  return new Intl.DateTimeFormat("EN", options)
    .format(date)
    .split("")
    .slice(0, 3)
    .join("");
}
function getDays(day) {
  const date = new Date();
  date.setDate(date.getDate() + day);
  return date.getDate();
}
function Day({ day, onClick, currentDay }) {
  return (
    <div
      className={`day ${day === currentDay ? "current" : ""}`}
      onClick={() => onClick(day)}
    >
      <span className="day-num">{getDays(day)}</span>
      <span className="week-day">{getDay(day)}</span>
    </div>
  );
}

export default Day;
