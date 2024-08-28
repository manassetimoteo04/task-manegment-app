import { supabase } from "./supabase";
import { uploadImage } from "./uploadImage";

export const getTeams = async function () {
  console.log("teste");
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
  return data;
};

export const createTeam = async function (team) {
  const image = await uploadImage(team.image, "teams");
  if (!image) {
    throw new Error("Erro ao fazer o upload da imagem.");
  }
  const newTeam = {
    name: team.name,
    created_by: team.createBy,
    description: team.description,
    bio: team.bio,
    image,
  };
  const { data, error } = await supabase.from("teams").insert(newTeam).select();
  if (error) throw new Error(error.message);
  return data[0];
};
