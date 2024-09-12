import { supabase } from "./supabase";

export const getUserImageName = async function (id) {
  const { data, error } = await supabase
    .from("users")
    .select("name, avatar, id, email, phone, bio")
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

export const getReadNumber = async ({ conId, userId, name }) => {
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
  console.log(msgsCount, readsCount, name);
  return (msgsCount || 0) - (readsCount || 0);
};

export const getConversationId = async ({ table, value }) => {
  const { data: id, error } = await supabase
    .from("conversation")
    .select("id")
    .eq(table, value)
    .single();
  return id !== null ? id.id : null;
};
