import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { getCalendarTasks } from "./calendarSlice";
import { getProjectImageName } from "../../services/apiHelpers";
import { useNavigate } from "react-router";

const CalendarComponent = () => {
  // const [events, setEvents] = useState(
  // );
  const { teams, status } = useSelector((state) => state.teams);
  const { calendarTasks: events, status: calendarStatus } = useSelector(
    (state) => state.calendar
  );
  const DISPATCH = useDispatch();
  useEffect(() => {
    if (status.statu === "succeeded" && status.type === "getAll") {
      const ids = teams.map((team) => team.id);
      DISPATCH(getCalendarTasks({ teams: ids }));
    }
  }, [status.statu]);
  const handleDateClick = (info) => {
    alert("Data: " + info.dateStr);
    console.log(info);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events}
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      dateClick={handleDateClick}
      eventContent={(eventInfo) => <RenderEventContent eventInfo={eventInfo} />}
      isDraggable={true}
      eventClassNames="custom-event-class"
    />
  );
};

function RenderEventContent({ eventInfo }) {
  const [projectName, setProjectName] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      const data = await getProjectImageName(
        eventInfo.event.extendedProps.project
      );
      setProjectName(data); // Atualiza o estado com o nome do projeto
    };

    fetchData(); // Chama a função de busca dos dados
  }, [eventInfo.event.extendedProps.location]);

  return (
    <div
      className="calendar-task-box"
      style={{
        backgroundColor: eventInfo.event.extendedProps.backgroundColor,
        color: eventInfo.event.extendedProps.textColor,
        padding: "5px",
        borderRadius: "5px",
      }}
      onClick={() => navigate(`#task/${eventInfo.event.extendedProps.id}`)}
    >
      <div>
        <img
          src={projectName.image ? projectName.image : "default-user.jpg"}
          alt=""
        />
      </div>
      <div>
        <span>{eventInfo.event.extendedProps.hour}</span>
        <h3>{eventInfo.event.title}</h3>
        <p>{projectName.name}</p>
      </div>
    </div>
  );
}

export default CalendarComponent;
