import { supabase } from "./supabase";

export const getProjectsTasks = async function (projectId) {
  const { data: task, error } = await supabase
    .from("task")
    .select("*")
    .eq("project_id", "Equal to");
  if (error) throw new Error(Error.message);
  return task;
};
export const getTasks = async function (projectId) {
  const { data: task, error } = await supabase.from("task").select("*");
  console.log(task);
  if (error) throw new Error(Error.message);
  return task;
};

export const createTask = async function (newTask) {
  const task = {
    title: newTask.title,
    description: newTask.description,
    start_date: newTask.startDate,
    start_time: newTask.startTime,
    project_id: "",
    progress: 10,
    responsable_id: "",
    duration: newTask.duration,
  };
  const { data, error } = await supabase.from("task").insert(task).select();
  if (error) throw new Error(Error.message);
  return data;
};
