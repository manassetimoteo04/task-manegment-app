import { supabase, supabaseUrl } from "./supabase";

export async function uploadImage(file, bucket) {
  if (!file) {
    console.error("Nenhum arquivo foi fornecido para upload.");
    return null;
  }

  // Nome do arquivo sem caracteres especiais
  const fileName = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.]/g, "_")}`;

  // Faz o upload
  const { data, error } = await supabase.storage
    .from(bucket) // Certifique-se de que este é o nome correto do bucket
    .upload(fileName, file);

  if (error) {
    console.error("Erro ao fazer o upload da imagem:", error.message);
    return null;
  }

  const fileUrl = `${supabaseUrl}/storage/v1/object/public/${bucket}/${data.path}`;
  return fileUrl;
}
