import CalendarComponent from "./CalendarComponent";
import CalendarDays from "./CalendarDays";
import CalendarTasks from "./CalendarTasks";

function CalenderPanel() {
  return (
    <div className="calendar-container">
      <header>
        <h4>Calendar</h4>
      </header>
      <CalendarComponent />
    </div>
  );
}

export default CalenderPanel;
