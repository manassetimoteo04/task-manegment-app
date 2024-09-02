import { supabase } from "./supabase";

export const projectCount = async ({ teams }) => {
  const { error, count } = await supabase
    .from("projects")
    .select("*", { count: "exact" })
    .in("team_id", teams);
  if (error) throw new Error(error.message);
  return count;
};
export const teamsCount = async ({ id }) => {
  const { error, count } = await supabase
    .from("teams")
    .select("*", { count: "exact" })
    .contains("members", [id]);
  if (error) {
    throw new Error(error.message);
  }
  return count;
};
export const tasksCount = async ({ teams }) => {
  const { data, error: err } = await supabase
    .from("projects")
    .select("id")
    .in("team_id", teams);

  const ids = data.map((id) => id.id);

  if (err) throw new Error(err.message);

  const { error, count } = await supabase
    .from("task")
    .select("*", { count: "exact" })
    .in("project_id", ids);
  if (error) throw new Error(error.message);

  return count;
};

export const getRecentTasks = async ({ teams }) => {
  const { data, error: err } = await supabase
    .from("projects")
    .select("id")
    .in("team_id", teams);
  const ids = data.map((id) => id.id);

  if (err) throw new Error(err.message);

  const { data: tasks, error } = await supabase
    .from("task")
    .select("id, title, priority, responsable_id, status")
    .in("project_id", ids)
    .order("created_at", { ascending: false })
    .range(0, 4);
  if (error) throw new Error(error.message);
  return tasks;
};
