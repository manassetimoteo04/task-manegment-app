import { supabase } from "./supabase";

export const getProjectsTasks = async function (projectId) {
  const { data: task, error } = await supabase
    .from("task")
    .select("*")
    .eq("project_id", projectId);
  if (error) throw new Error(Error.message);
  return task;
};
export const getTask = async function (id) {
  const { data: task, error } = await supabase
    .from("task")
    .select("*")
    .eq("id", id);
  if (error) throw new Error(Error.message);
  return task;
};
export const getTasks = async function (projectId) {
  const { data: projects, error: err } = await supabase
    .from("projects")
    .select("id");
  const ids = projects.map((project) => project.id);
  const { data: task, error } = await supabase
    .from("task")
    .select("*")
    .in("project_id", ids);
  if (error) throw new Error(Error.message);
  return task;
};

export const createTask = async function (newTask) {
  const task = {
    title: newTask.name,
    description: newTask.description,
    start_date: newTask.startDate,
    start_time: newTask.startTime,
    project_id: newTask.projectId,
    progress: 10,
    responsable_id: newTask.enganged,
    priority: newTask.priority,
    duration: newTask.duration,
  };
  const { data, error } = await supabase.from("task").insert(task).select();
  if (error) throw new Error(Error.message);
  return data;
};
