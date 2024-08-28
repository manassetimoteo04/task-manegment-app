import { supabase } from "./supabase";
import { uploadImage } from "./uploadImage";
export const getProjects = async function () {
  const { data: projects, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);
  return projects;
};
export const createNewProject = async function (newProject) {
  const image = await uploadImage(newProject.image, "projects");
  if (!image) {
    throw new Error("Erro ao fazer o upload da imagem.");
  }
  const project = {
    team_id: newProject.teamId,
    created_by: "asdasd",
    description: newProject.description,
    due_date: newProject.dueDate,
    image: image,
    name: newProject.name,
    start_date: newProject.startDate,
  };

  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select();
  if (error) console.error(error.message);
  return data[0];
};

export const getProjectID = async function (id) {
  const { data, error } = await supabase.from("projects").select().eq("id", id);
  console.log(data);
  return data[0];
};
