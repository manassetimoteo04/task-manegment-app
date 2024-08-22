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
function Day({ day, onClick, currentDay }) {
  return (
    <div
      className={`day ${day === currentDay ? "current" : ""}`}
      onClick={() => onClick(day)}
    >
      <span className="day-num">{day}</span>
      <span className="week-day">{getDay(day)}</span>
    </div>
  );
}

export default Day;
