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
    .select("name, image, id, members")
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

export const getReadNumber = async ({ conId, userId }) => {
  const { error: readError, count: readsCount } = await supabase
    .from("message_reads")
    .select("*", { count: "exact" })
    .eq("conversation_id", conId)
    .eq("user_id", userId);

  const {
    data,
    error: msgError,
    count: msgsCount,
  } = await supabase
    .from("messages")
    .select("*", { count: "exact" })
    .eq("conversation_id", conId)
    .neq("send_by", userId);

  return (msgsCount || 0) - (readsCount || 0);
};
