import { useState } from "react";
import Day from "./Day";

const settingArrDays = function (day) {
  const today = day;
  let dayB = 31;
  const daysBefore = Array.from({ length: 7 }, (_, i) =>
    today - (i + 1) <= 0 ? dayB - (1 - i) : today - (i + 1)
  ).reverse();

  const daysAfter = Array.from({ length: 7 }, (_, i) => today + (i + 1));
  console.log(daysBefore);
  return [...daysBefore, today, ...daysAfter];
};

function CalendarDays() {
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const days = settingArrDays(currentDay);
  return (
    <div className="calendar-days">
      {days.map((day, i) => (
        <Day
          day={day}
          key={i}
          onClick={setCurrentDay}
          currentDay={currentDay}
        />
      ))}
    </div>
  );
}

export default CalendarDays;
