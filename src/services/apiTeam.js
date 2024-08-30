import { supabase } from "./supabase";
import { uploadImage } from "./uploadImage";

export const getTeams = async function () {
  const { data: team, error } = await supabase.from("teams").select("*");
  if (error) {
    console.error(team, error);
    throw new Error(error.message);
  }
  return team;
};
export const getSingleTeam = async function (id) {
  const { data, error } = await supabase.from("teams").select().eq("id", id);
  if (error) throw new Error(error.message);
  return data.at(0);
};

export const createTeam = async function (team) {
  const image = await uploadImage(team.image, "teams");
  if (!image) {
    throw new Error("Erro ao fazer o upload da imagem.");
  }
  const newTeam = {
    name: team.name,
    created_by: team.createdBy,
    description: team.description,
    bio: team.bio,
    image,
    members: [],
    tags: [],
  };
  const { data, error } = await supabase.from("teams").insert(newTeam).select();
  if (error) throw new Error(error.message);
  return data[0];
};

export const addTeamTags = async function ({ id, arr }) {
  const { data, error } = await supabase
    .from("teams")
    .update({ tags: arr })
    .eq("id", id)
    .select("tags");
  console.log(data);
  if (error) throw new Error(error.message);
  return data.at(0).tags;
};
export const addTeamMember = async function ({ email, id }) {
  const { data: userId, error: err } = await supabase
    .from("users")
    .eq("email", email)
    .select("id");
  if (err) throw new Error("User not found: ", err.message);

  const { data, error } = await supabase
    .from("teams")
    .update({
      members: supabase.raw("array_append(members, ?)", userId),
    })
    .eq("id", id)
    .select("members");
  console.log(data, userId);

  if (error) {
    console.error("Erro ao atualizar array:", error);
  } else {
    console.log("Array atualizado com sucesso");
  }
};
