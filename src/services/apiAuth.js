import { fetchTimeOut } from "./fetchTimeOut";
import { supabase } from "./supabase";

//LOGIN USER
export const userLogin = async function ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) throw new Error(error.message);

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
export const getLogged = async function () {
  const { data } = await supabase.auth.getUser();
  const user = await getUser(data.user.id);
  return { ...user, role: data?.user.role };
};
export const getSession = async function () {
  const { data: session } = await supabase.auth.getSession();
  console.log(session.session.user);
  if (!session.session) return null;
  return session.session?.user;
};

export const userLogout = async function () {
  const { error } = await supabase.auth.signOut();

  if (error) {
    throw new Error(error.message);
  }
};
