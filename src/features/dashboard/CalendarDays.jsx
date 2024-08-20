import Day from "./Day";

const settingArrDays = function () {
  const today = new Date().getDate();
  const daysBefore = Array.from(
    { length: 7 },
    (_, i) => today - (i + 1)
  ).reverse();
  const daysAfter = Array.from({ length: 7 }, (_, i) => today + (i + 1));
  console.log(daysBefore);
  return [...daysBefore, today, ...daysAfter];
};

function CalendarDays() {
  const days = settingArrDays();
  return (
    <div className="calendar-days">
      {days.map((day, i) => (
        <Day day={day} key={i} />
      ))}
    </div>
  );
}

export default CalendarDays;
