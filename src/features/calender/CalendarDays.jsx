import { useState } from "react";
import Day from "./Day";

const settingArrDays = function (day) {
  const today = day;
  let dayB = 7;
  let dayA = 1;
  const daysBefore = Array.from({ length: 7 }, (_, i) => -dayB--);
  const daysAfter = Array.from({ length: 7 }, (_, i) => dayA++);
  console.log(daysBefore, daysAfter);
  return [...daysBefore, today, ...daysAfter];
};

function CalendarDays() {
  const [currentDay, setCurrentDay] = useState(new Date().getDate());
  const days = settingArrDays(0);
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
