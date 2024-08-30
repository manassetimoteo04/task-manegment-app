import { supabase } from "./supabase";
import { uploadImage } from "./uploadImage";

export const getTeams = async function ({ id }) {
  const { data: team, error } = await supabase
    .from("teams")
    .select("*")
    .contains("members", [id]);
  console.log(team, id);
  if (error) {
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
  if (error) throw new Error(error.message);
  return data.at(0).tags;
};
export const addTeamMember = async function ({ email, id, arr }) {
  const { data: userId, error: err } = await supabase
    .from("users")
    .select("id")
    .eq("email", email)
    .single();

  if (err) {
    throw new Error(`No user with email: ${email} were found`);
  }
  const newArr = [...arr, userId.id];
  const isExist = arr.some((a) => a === userId.id);
  if (isExist) throw new Error("This user already exists");
  const { data: members, error } = await supabase
    .from("teams")
    .update({
      members: newArr,
    })
    .eq("id", id)
    .select("members")
    .single();

  if (error) {
    console.error("Erro ao atualizar array:", error);
    throw new Error(error.message);
  }
  return members.members;
};

export const getMembers = async function ({ id }) {
  const { data: members, error } = await supabase
    .from("teams")
    .select("members")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return members;
};
