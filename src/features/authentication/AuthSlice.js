import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getLogged,
  getSession,
  userLogin,
  userLogout,
  userSignUp,
} from "../../services/apiAuth";

const initialState = {
  currentUser: {},
  isLoading: true,
  status: {},
  role: "",
  error: "",
};
export const login = createAsyncThunk("auth/login", async (authCred) => {
  const data = await userLogin(authCred);
  console.log(data);
  return data;
});
export const signUp = createAsyncThunk("auth/signUp", async (authData) => {
  const data = await userSignUp(authData);
  return data;
});
export const userLogged = createAsyncThunk("auth/getLogged", async () => {
  const data = await getLogged();
  return data;
});
export const logout = createAsyncThunk("auth/logout", async () => {
  await userLogout();
});
export const getUserSession = createAsyncThunk("auth/session", async () => {
  const data = await getSession();
  return data;
});

const AuthReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    loginBuilder(builder);
    signUpBuilder(builder);
    getLoggedBuilder(builder);
    logoutBuilder(builder);
    getSessionBuilder(builder);
  },
});
function loginBuilder(builder) {
  builder
    .addCase(login.pending, (state) => {
      state.isLoading = true;
      state.status.type = "login";
      state.status.statu = "loading";
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status.type = "login";
      state.status.statu = "succeeded";
      state.currentUser = action.payload;
      state.role = action.payload.role;
    })
    .addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.status.type = "login";
      state.status.statu = "failed";
    });
}
function signUpBuilder(builder) {
  builder
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
      state.status.type = "signup";
      state.status.statu = "loading";
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status.type = "signup";
      state.status.statu = "succeeded";
      state.currentUser = action.payload;
      state.role = action.payload.role;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
      state.status.type = "signup";
      state.status.statu = "failed";
    });
}
function getLoggedBuilder(builder) {
  builder
    .addCase(userLogged.pending, (state) => {
      state.isLoading = true;
      state.status.type = "getLogged";
      state.status.statu = "loading";
    })
    .addCase(userLogged.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.role = action.payload.role;
      state.status.type = "getLogged";
      state.status.statu = "succeeded";
    })
    .addCase(userLogged.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error getting user";
      state.status.type = "getLogged";
      state.status.statu = "failed";
    });
}
function logoutBuilder(builder) {
  builder
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = {};
      state.role = "";
    })
    .addCase(logout.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error logging out, check your internet conection";
    });
}
function getSessionBuilder(builder) {
  builder
    .addCase(getUserSession.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getUserSession.fulfilled, (state, action) => {
      state.isLoading = false;
      state.role = action.payload?.role;
      state.currentUser.id = action.payload?.id;
    })
    .addCase(getUserSession.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error getting session";
    });
}
export default AuthReducer.reducer;
