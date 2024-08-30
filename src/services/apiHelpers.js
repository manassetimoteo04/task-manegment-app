import { supabase } from "./supabase";

export const getUserImageName = async function (id) {
  const { data, error } = await supabase
    .from("users")
    .select("name, avatar, id")
    .eq("id", id)
    .single();
  if (error) throw new Error(`User with id ${id} not found`);
  return data;
};
export const getTeamImageName = async function (id) {
  const { data, error } = await supabase
    .from("teams")
    .select("name, image, id")
    .eq("id", id)
    .single();
  if (error) throw new Error(`Team with id ${id} not found`);
  return data;
};
export const getProjectImageName = async function (id) {
  const { data, error } = await supabase
    .from("projects")
    .select("name, image, id")
    .eq("id", id)
    .single();
  if (error) throw new Error(`Project with id ${id} not found`);
  return data;
};
