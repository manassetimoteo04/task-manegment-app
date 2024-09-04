import CalendarTask from "./CalendarTask";
// const event = document.querySelector('.event');
// const startTime = new Date('2024-08-15T10:00:00');
// const duration = 2; // 2 horas

// const startRow = startTime.getHours();
// event.style.gridRow = `${startRow + 1} / span ${duration}`;

const tasks = [
  {
    title: "Reunião de Planejamento",
    startDate: "2024-08-03",
    startTime: "01:00",
    bgColor: "#0077b6", // Azul Profundo
  },
  {
    title: "Revisão de Código",
    startDate: "2024-08-01",
    startTime: "08:00",
    bgColor: "#6a4ebf", // Roxo Vibrante
  },
  {
    title: "Sessão de Ideação",
    startDate: "2024-08-12",
    startTime: "06:00",
    bgColor: "#0096c7", // Azul Ciano
  },
  {
    title: "Design do Fluxo de Usuário",
    startDate: "2024-08-12",
    startTime: "09:30",
    bgColor: "#90be6d", // Verde Oliva
  },
  {
    title: "Apresentação para o Cliente",
    startDate: "2024-08-22",
    startTime: "06:00",
    bgColor: "#f94144", // Vermelho Intenso
  },
  {
    title: "Teste de Produto",
    startDate: "2024-08-04",
    startTime: "03:00",
    bgColor: "#f3722c", // Laranja Vibrante
  },
  {
    title: "Lançamento do Site",
    startDate: "2024-08-4",
    startTime: "06:00",
    bgColor: "#577590", // Azul Cinza
  },
  {
    title: "Reunião de Feedback",
    startDate: "2024-08-25",
    startTime: "10:00",
    bgColor: "#f9844a", // Coral
  },
  {
    title: "Análise de Métricas",
    startDate: "2024-08-26",
    startTime: "14:30",
    bgColor: "#43aa8b", // Verde Água
  },
  {
    title: "Sessão de Brainstorming",
    startDate: "2024-08-27",
    startTime: "16:00",
    bgColor: "#4d908e", // Azul Esverdeado
  },
];

function CalendarTasks() {
  return <div className="calendar-tasks"></div>;
}

export default CalendarTasks;
