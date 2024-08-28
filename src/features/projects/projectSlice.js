import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createNewProject,
  getProjectID,
  getProjects,
} from "../../services/apiProjects";
import { createComment, getComments } from "../../services/apiComments";

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
export const getProjectNotes = createAsyncThunk(
  "projects/getProjectNotes",
  async (id) => {
    const data = await getComments(id);
    return data;
  }
);
export const createProjectNote = createAsyncThunk(
  "projects/createNote",
  async (note) => {
    const data = await createComment(note);
    console.log(data);
    return data;
  }
);
const initialState = {
  data: [],
  status: "",
  getStatus: "",
  getNotesStatus: "",
  createStatus: "",
  currentProject: {},
  projectNotes: [],
  error: "",
};

const projectReducer = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    gettingProjectsBuilder(builder);
    createProjectBuilder(builder);
    getProjectBuilder(builder);
    getProjectNotesBuilder(builder);
    createProjectNoteBuilder(builder);
  },
});
function gettingProjectsBuilder(builder) {
  //BUILDER FOR GETTING PROJECTS
  builder
    .addCase(getProjectsData.pending, (state) => {
      state.status = "loading";
      state.createStatus = "loading";
    })
    .addCase(getProjectsData.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
      state.createStatus = "succeeded";
      state.currentProject = state.data.at(0);
    })
    .addCase(getProjectsData.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
}
function createProjectBuilder(builder) {
  // BUILDER FOR CREATING NEW PROJECT
  builder
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
    });
}
function getProjectBuilder(builder) {
  // BUILDER FOR GETTING PROJECT
  builder
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
}
function getProjectNotesBuilder(builder) {
  builder
    .addCase(getProjectNotes.pending, (state) => {
      state.getNotesStatus = "loading";
    })
    .addCase(getProjectNotes.fulfilled, (state, action) => {
      state.getNotesStatus = "succeeded";
      state.projectNotes = action.payload;
    })
    .addCase(getProjectNotes.rejected, (state, action) => {
      state.getNotesStatus = "failed";
      state.error = action.error.message;
    });
}
function createProjectNoteBuilder(builder) {
  builder
    .addCase(createProjectNote.pending, (state) => {
      state.getNotesStatus = "creating";
    })
    .addCase(createProjectNote.fulfilled, (state, action) => {
      state.getNotesStatus = "succeeded";
      state.projectNotes = [action.payload, ...state.projectNotes];
    })
    .addCase(createProjectNote.rejected, (state, action) => {
      state.getNotesStatus = "failed";
      state.error = action.error.message;
    });
}
export default projectReducer.reducer;
