import { supabase } from "./supabase";

export const createConversation = async ({ teamId, message }) => {
  if (teamId) {
    const { data, error } = await supabase
      .from("conversation")
      .select("*")
      .eq("team_id", teamId)
      .single("");
    if (!error) {
      const msg = await createMessage(message, data.id);
      console.log(data, message, msg);
      return msg;
    }
    if (!data || data.length === 0) {
      const newConv = {
        is_group: true,
        team_id: teamId,
      };
      const { data: newConversation, error: err } = await supabase
        .from("conversation")
        .insert(newConv)
        .select()
        .single();
      if (err) throw new Error(err.message);
      return await createMessage(message, newConversation.id);
    }
  }
};
const createMessage = async function (message, id) {
  const newMessage = {
    ...message,
    conversation_id: id,
  };
  const { data: messages, error } = await supabase
    .from("messages")
    .insert(newMessage)
    .select("*")
    .single();
  console.log(messages);
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  return messages;
};
