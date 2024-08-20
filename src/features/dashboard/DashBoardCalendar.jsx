import CalendarDays from "./CalendarDays";
import CalendarTasks from "./CalendarTasks";

function DashBoardCalendar() {
  return (
    <div className="calendar-container">
      <header>
        <h4>Calendar</h4>
      </header>
      <CalendarDays />
      <CalendarTasks />
    </div>
  );
}

export default DashBoardCalendar;
