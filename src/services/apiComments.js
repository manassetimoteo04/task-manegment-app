import { supabase } from "./supabase";

export const getComments = async function (id) {
  const { data: comments, error } = await supabase
    .from("comments")
    .select("*")
    .eq("created_from", id)
    .order("created_at", { ascending: false });
  if (error) throw new Error(error.message);

  return comments;
};

export const createComment = async function (comment) {
  const newComment = {
    text: comment.text,
    created_by: comment.createdBy,
    created_from: comment.createdFrom,
  };
  const { data, error } = await supabase
    .from("comments")
    .insert(newComment)
    .select();
  console.log(data);
  if (error) throw new Error(error.message);
  return data[0];
};
export const deleteComment = async function (id) {
  const { error } = await supabase
    .from("comments")
    .delete()
    .eq("some_column", "someValue");
  if (error) throw new Error(error.message);
};
