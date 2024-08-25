import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewProject,
  getProjectID,
  getProjects,
} from "../../services/apiProjects";

export const getProjectsData = createAsyncThunk(
  "projects/getProjectsData",
  async () => {
    const data = await getProjects();
    return data;
  }
);
export const createProject = createAsyncThunk(
  "projects/createProject",
  async (newProject) => {
    const data = await createNewProject(newProject);
    return data;
  }
);
export const getCurrProject = createAsyncThunk(
  "projects/getCurrProject",
  async (id) => {
    const data = await getProjectID(id);
    console.log(data);
    return data;
  }
);

const initialState = {
  data: [],
  status: "",
  getStatus: "",
  createStatus: "",
  currentProject: {},
  error: "",
};

const projectReducer = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //BUILDER FOR GETTING PROJECTS
    builder
      .addCase(getProjectsData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getProjectsData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.currentProject = state.data.at(0);
      })
      .addCase(getProjectsData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      // BUILDER FOR CREATING NEW PROJECT
      .addCase(createProject.pending, (state) => {
        state.createStatus = "loading";
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.createStatus = "succeeded";
        state.data = [action.payload, ...state.data];
      })
      .addCase(createProject.rejected, (state, action) => {
        state.createStatus = "failed";
        state.error = action.error.message;
      })

      // BUILDER FOR GETTING PROJECT
      .addCase(getCurrProject.pending, (state) => {
        state.getStatus = "loading";
      })
      .addCase(getCurrProject.fulfilled, (state, action) => {
        state.getStatus = "succeeded";
        state.currentProject = action.payload;
      })
      .addCase(getCurrProject.rejected, (state, action) => {
        state.getStatus = "failed";
        state.error = action.error.message;
      });
  },
});

export default projectReducer.reducer;
