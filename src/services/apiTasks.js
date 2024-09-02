import { PAGE_SIZE } from "../utils/constants";
import { supabase } from "./supabase";

export const getProjectsTasks = async function ({
  projectId,
  page = 1,
  filter,
}) {
  let query = supabase
    .from("task")
    .select("*", { count: "exact" })
    .eq("project_id", projectId);
  if (filter && filter.value !== "") {
    query = query.eq("status", filter.value);
  }
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  if (!page && !filter) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }

  const { data: task, error, count } = await query;
  if (error) throw new Error(Error.message);
  return { task, count };
};
export const getTask = async function (id) {
  const { data: task, error } = await supabase
    .from("task")
    .select("*")
    .eq("id", id);
  if (error) throw new Error(Error.message);
  return task;
};
export const getTasks = async function ({ page = 1, filter, teams }) {
  const { data: projects, error: err } = await supabase
    .from("projects")
    .select("id")
    .in("team_id", teams);

  if (err) throw new Error(err.message);

  if (!projects) return;
  const ids = projects.map((project) => project.id);
  let query = supabase
    .from("task")
    .select("*", { count: "exact" })
    .in("project_id", ids);

  if (filter && filter.value !== "") {
    query = query.eq("status", filter.value);
  }
  if (page) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  if (!page && !filter) {
    const from = (page - 1) * PAGE_SIZE;
    const to = from + PAGE_SIZE - 1;
    query = query.range(from, to);
  }
  const { data: task, error, count } = await query;
  if (error) throw new Error(error.message);
  return { task, count };
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
    status: "pending",
  };
  const { data, error } = await supabase.from("task").insert(task).select();
  if (error) {
    console.log(error);

    throw new Error(Error.message);
  }
  return data;
};

export const changeTaskStatu = async ({ id, value }) => {
  const { data, error } = await supabase
    .from("task")
    .update({ status: value })
    .eq("id", id)
    .select()
    .single();
  if (error) throw new Error(Error.message);
  console.log(data);
  return data;
};
