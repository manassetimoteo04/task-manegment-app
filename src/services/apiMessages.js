import { supabase } from "./supabase";

export const createConversation = async ({ teamId, message, idies }) => {
  if (teamId) {
    const { data, error } = await supabase
      .from("conversation")
      .select("")
      .eq("team_id", teamId)
      .single();
    if (!error) {
      const msg = await createMessage(message, data.id);
      const toSend = {
        conversation: { ...data, last_message: msg },
        message: msg,
      };
      return toSend;
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
      console.log(newConversation);
      if (err) throw new Error(err.message);
      const msg = await createMessage(message, newConversation.id);
      const toSend = {
        conversation: { ...newConversation, last_message: msg },
        message: msg,
      };
      return toSend;
    }
  }
  if (idies) {
    const { data, error } = await supabase
      .from("conversation")
      .select("*")
      .contains("members", idies)
      .single();
    if (!error) {
      const msg = await createMessage(message, data.id);
      const toSend = {
        conversation: { ...data, last_message: msg },
        message: msg,
      };
      return toSend;
    }
    if (!data || data.length === 0) {
      const newConv = {
        is_group: false,
        members: idies,
      };
      console.log(newConv);
      const { data: newConversation, error: err } = await supabase
        .from("conversation")
        .insert(newConv)
        .single();
      if (err) throw new Error(err.message);
      if (!err) {
        const msg = await createMessage(message, newConversation.id);
        console.log(newConversation);
        const toSend = {
          conversation: { ...newConversation, last_message: msg },
          message: msg,
        };
        return toSend;
      }
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
    .select()
    .single();

  const { data, error: err } = await supabase
    .from("conversation")
    .update({ last_message: messages })
    .select()
    .eq("id", id);
  console.log(data, messages, newMessage);
  if (err) throw new Error(err.message);
  if (error) {
    throw new Error(error.message);
  }
  return messages;
};

export const getConversations = async ({ teams, id }) => {
  const { data, error } = await supabase
    .from("conversation")
    .select("*")
    // .in("team_id", teams)
    // .contains("members", [id])
    .or(`team_id.in.(${teams.join(",")}),members.cs.{${id}}`)
    .order("last_message->>created_at", { ascending: false });
  if (error) {
    throw new Error(error.message);
  }
  return data;
};
export const getMessages = async ({ id }) => {
  console.log(id);
  const { data, error } = await supabase
    .from("messages")
    .select("*")
    .eq("conversation_id", id)
    .order("created_at", { ascending: true });
  // if (error) {
  //   throw new Error(error.message);
  // }
  console.log("messages", data);
  return data;
};
export const readMessages = async (obj) => {
  const { data, error } = await supabase
    .from("message_reads")
    .upsert(obj, { onConflict: ["message_id", "user_id"] })
    .select();
  if (error) throw new Error(error.message);
  return data;
};
