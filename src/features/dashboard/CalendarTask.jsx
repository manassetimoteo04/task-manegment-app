function CalendarTask({ task }) {
  const day = new Date(task.startDate).getDate();
  const hour = task.startTime.split("").slice(0, 2).join("");
  return (
    <div
      className="calendar-task"
      style={{
        gridRow: `${hour}`,
        gridColumn: `${day}/span 7`,
        backgroundColor: task.bgColor,
      }}
    >
      {task.title}
    </div>
  );
}

export default CalendarTask;
