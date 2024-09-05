import { supabase } from "./supabase";

export const calendarTasks = async function ({ teams }) {
  const { data, error: err } = await supabase
    .from("projects")
    .select("id")
    .in("team_id", teams);

  const ids = data.map((id) => id.id);

  if (err) throw new Error(err.message);

  const { data: taskData, error } = await supabase
    .from("task")
    .select("*")
    .in("project_id", ids);

  const tasks = taskData.map((item) => {
    const start = new Date(item.start_date);
    const end = new Date(item.start_date);
    const data = {
      title: item.title,
      start: start.toISOString(),
      end: end.setDate(end.getDate() + item.duration),
      backgroundColor:
        item.status === "pending"
          ? "#4CAF50"
          : item.status === "done"
          ? "#4a4dfc"
          : "dddddd",
      textColor: "#ffffff",
      id: item.id,
      extendedProps: {
        id: item.id,
        hour: item.start_time,
        description: item.description,
        project: item.project_id,
      },
    };
    return data;
  });
  if (error) {
    console.error(error);
    throw new Error(error.message);
  }
  return tasks;
};
