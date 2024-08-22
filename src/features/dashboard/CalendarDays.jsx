import { settingArrDays } from "../../utils/helpers";
import Day from "./Day";

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
