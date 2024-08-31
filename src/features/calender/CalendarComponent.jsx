import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      title: "Client Review & Feedback",
      start: "2024-08-13T10:30:00",
      end: "2024-09-13T11:30:00",
      backgroundColor: "#845EF7",
      textColor: "#ffffff",
    },
    {
      title: "Ideation Session",
      start: "2024-08-14T12:00:00",
      end: "2024-09-14T13:00:00",
      backgroundColor: "#4CAF50",
      textColor: "#ffffff",
    },
    {
      title: "Sign up flow redesign",
      start: "2024-08-15T14:00:00",
      end: "2024-09-31T15:30:00",
      backgroundColor: "#2196F3",
      textColor: "#ffffff",
    },
  ]);

  const handleDateClick = (info) => {
    alert("Data: " + info.data);
    console.log(info);
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
      initialView="dayGridMonth"
      events={events} // Usando o state para os eventos
      headerToolbar={{
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
      }}
      dateClick={handleDateClick}
      eventContent={renderEventContent}
      // Customizando a aparência dos eventos
      isDraggeBle
      eventClassNames="custom-event-class" // Aplicando classes CSS personalizadas
    />
  );
};

// Função para renderizar o conteúdo do evento, permitindo estilização customizada
function renderEventContent(eventInfo) {
  console.log(eventInfo);
  return (
    <div
      style={{
        backgroundColor: eventInfo.event.extendedProps.backgroundColor,
        color: eventInfo.event.extendedProps.textColor,
      }}
    >
      <span>{eventInfo.timeText}</span>
      <p>{eventInfo.event.title}</p>
    </div>
  );
}

export default CalendarComponent;
