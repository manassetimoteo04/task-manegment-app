import { supabase, supabaseUrl } from "./supabase";
export const getProjects = async function () {
  const { data: projects, error } = await supabase.from("projects").select("*");
  if (error) throw new Error(error.message);
  return projects;
};
export const createNewProject = async function (newProject) {
  const image = await uploadImage(newProject.image);
  if (!image) {
    throw new Error("Erro ao fazer o upload da imagem.");
  }
  const project = {
    team_id: "23423",
    created_by: "asdasd",
    description: newProject.description,
    due_date: newProject.dueDate,
    image: image,
    name: newProject.name,
    start_date: newProject.startDate,
    tasks: ["1", "2", "3", "4"],
    team_id: "23423",
  };

  const { data, error } = await supabase
    .from("projects")
    .insert([project])
    .select();
  if (error) console.error(error.message);
  return data[0];
};

export async function uploadImage(file) {
  if (!file) {
    console.error("Nenhum arquivo foi fornecido para upload.");
    return null;
  }

  // Nome do arquivo sem caracteres especiais
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;

  // Faz o upload
  const { data, error } = await supabase.storage
    .from("projects") // Certifique-se de que este é o nome correto do bucket
    .upload(fileName, file);

  if (error) {
    console.error("Erro ao fazer o upload da imagem:", error.message);
    return null;
  }

  const fileUrl = `${supabaseUrl}/storage/v1/object/public/projects/${data.path}`;
  console.log("URL da imagem:", fileUrl);
  return fileUrl;
}

export const getProjectID = async function (id) {
  const { data, error } = await supabase.from("projects").select().eq("id", id);
  console.log(data);
  return data[0];
};
