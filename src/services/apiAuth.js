import { fetchTimeOut } from "./fetchTimeOut";
import { supabase } from "./supabase";
import { uploadImage } from "./uploadImage";

//LOGIN USER
export const userLogin = async function ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error)
    throw new Error(
      error.message === "Failed to fetch"
        ? "Something went wrong, check your internet conection and please try again"
        : error.message === "Invalid login credentials"
        ? "Wrong Email or Password, please check and try again"
        : error.message
    );

  const user = await getUser(data.user.id);
  return { ...user, role: data.user.role };
};

// GET SIGNED IN USER DATA
const getUser = async function (id) {
  const { data, error } = await supabase.from("users").select("*").eq("id", id);
  if (error) throw new Error(error.message);

  return data.at(0);
};
//SIGN UP USER
export const userSignUp = async function (authData) {
  const { data, error } = await supabase.auth.signUp({
    email: authData.email,
    password: authData.password,
  });
  if (error) throw new Error(error.message);
  const userObj = {
    name: authData.name,
    bio: "",
    avatar: "",
    id: data.user.id,
    email: authData.email,
  };

  const user = await createUser(userObj);
  return { ...user, role: data.user.role };
};
const createUser = async function (data) {
  const { data: user, error } = await supabase
    .from("users")
    .insert(data)
    .select();
  if (error) throw new Error(error.message);
  return user;
};

export const updateUser = async function ({ table, value, id }) {
  if (table === "avatar") {
    try {
      const img = await uploadImage(value, "avatars");
      const user = await updateInfor(table, img, id);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  }
  if (table === "email") {
    const data = await updateEmail(value);
    const user = await updateInfor(table, value, id);
    return user;
  }
  const data = await updateInfor(table, value, id);
  return data;
};
const updateInfor = async (table, value, id) => {
  const { data: user, error } = await supabase
    .from("users")
    .update({ [table]: value })
    .eq("id", id)
    .select();
  if (error) throw new Error(error.message);
  return user.at(0);
};
const updateEmail = async function (value) {
  const { data, error } = await supabase.auth.updateUser({
    email: value,
  });

  if (error) throw new Error(error.message);
  return data;
};
export const getLogged = async function () {
  const { data } = await supabase.auth.getUser();
  const user = await getUser(data.user.id);
  return { ...user, role: data?.user.role };
};
export const getSession = async function () {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;
  return session.session?.user;
};

export const userLogout = async function () {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};
export const changePassword = async ({ actualPassword, newPassword }) => {
  const { email } = await getSession();
  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: actualPassword,
  });
  if (error) throw new Error("The actual password is wrong");
  const { error: err } = await supabase.auth.updateUser({
    password: newPassword,
  });
  if (err) throw new Error(err.message);
};
