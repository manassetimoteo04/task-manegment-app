import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getLogged,
  getSession,
  userLogin,
  userLogout,
  userSignUp,
} from "../../services/apiAuth";

const initialState = {
  currentUser: null,
  isLoading: true,
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
  console.log(data, "Session");
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
    })
    .addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.role = action.payload.role;
    })
    .addCase(login.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error logging user";
    });
}
function signUpBuilder(builder) {
  builder
    .addCase(signUp.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.role = action.payload.role;
    })
    .addCase(signUp.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error singing up user";
    });
}
function getLoggedBuilder(builder) {
  builder
    .addCase(userLogged.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(userLogged.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
      state.role = action.payload.role;
    })
    .addCase(userLogged.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error getting user";
    });
}
function logoutBuilder(builder) {
  builder
    .addCase(logout.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.isLoading = false;
      state.currentUser = null;
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
      state.role = action.payload.role;
    })
    .addCase(getUserSession.rejected, (state) => {
      state.isLoading = false;
      state.error = "Error getting session";
    });
}
export default AuthReducer.reducer;
