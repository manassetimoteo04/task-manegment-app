import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addTeamMember,
  addTeamTags,
  createTeam,
  getMembers,
  getSingleTeam,
  getTeams,
} from "../../services/apiTeam";

export const createNewTeam = createAsyncThunk(
  "teams/createTeam",
  async (team) => {
    console.log(team);
    const data = await createTeam(team);
    return data;
  }
);
export const getAllTeams = createAsyncThunk("teams/getTeams", async () => {
  const data = await getTeams();
  return data;
});
export const getCurrTeam = createAsyncThunk("teams/getCurrTeam", async (id) => {
  const data = await getSingleTeam(id);
  return data;
});
export const addTeamTagsNew = createAsyncThunk(
  "teams/addTeamTagsNew",
  async (obj) => {
    const data = await addTeamTags(obj);
    console.log(data);
    return data;
  }
);
export const addNewMember = createAsyncThunk(
  "teams/addNewMember",
  async (obj) => {
    const data = await addTeamMember(obj);
    return data;
  }
);
export const getTeamMembers = createAsyncThunk(
  "teams/getMembers",
  async (id) => {
    const data = await getMembers(id);
    console.log(data);
    return data;
  }
);
const initialState = {
  teams: [],
  members: [],
  status: { type: "", statu: "" },
  error: { type: "", error: "" },
  currentTeam: null,
};
const teamReducer = createSlice({
  name: "teams",
  initialState,
  reducers: {},
  extraReducers(builder) {
    createTeamBuilder(builder);
    loadTeamsBuilder(builder);
    getCurrTeamBuilder(builder);
    addTeamTagsNewBuilder(builder);
    addNewMemberBuilder(builder);
    getMemberBuilder(builder);
  },
});
export default teamReducer.reducer;

function loadTeamsBuilder(builder) {
  builder
    .addCase(getAllTeams.pending, (state) => {
      state.status.type = "getAll";
      state.status.statu = "loading";
    })
    .addCase(getAllTeams.fulfilled, (state, action) => {
      state.status.type = "getAll";
      state.status.statu = "succeeded";
      state.teams = action.payload;
    })
    .addCase(getAllTeams.rejected, (state) => {
      state.error.type = "getAll";
      state.status.statu = "failed";
      state.error.error = "Error creating new team";
    });
}
function createTeamBuilder(builder) {
  builder
    .addCase(createNewTeam.pending, (state) => {
      state.status.type = "create";
      state.status.statu = "loading";
    })
    .addCase(createNewTeam.fulfilled, (state, action) => {
      state.status.type = "create";
      state.status.statu = "succeeded";
      state.teams = [action.payload, ...state.teams];
    })
    .addCase(createNewTeam.rejected, (state) => {
      state.error.type = "create";
      state.status.statu = "failed";
      state.error.error = "Error creating new team";
    });
}
function getCurrTeamBuilder(builder) {
  builder
    .addCase(getCurrTeam.pending, (state) => {
      state.status.type = "get";
      state.status.statu = "loading";
    })
    .addCase(getCurrTeam.fulfilled, (state, action) => {
      state.status.type = "get";
      state.status.statu = "succeeded";
      state.currentTeam = action.payload;
    })
    .addCase(getCurrTeam.rejected, (state) => {
      state.error.type = "get";
      state.status.statu = "failed";
      state.error.error = "Error getting team info.";
    });
}
function addTeamTagsNewBuilder(builder) {
  builder
    .addCase(addTeamTagsNew.pending, (state) => {
      state.status.type = "addTeamTag";
      state.status.statu = "loading";
    })
    .addCase(addTeamTagsNew.fulfilled, (state, action) => {
      state.status.type = "addTeamTag";
      state.status.statu = "succeeded";
      state.currentTeam.tags = action.payload;
    })
    .addCase(addTeamTagsNew.rejected, (state) => {
      state.error.type = "addTeamTag";
      state.status.statu = "failed";
      state.error.error = "Error getting team info.";
    });
}
function addNewMemberBuilder(builder) {
  builder
    .addCase(addNewMember.pending, (state) => {
      state.status.type = "addMember";
      state.status.statu = "loading";
    })
    .addCase(addNewMember.fulfilled, (state, action) => {
      state.status.type = "addMember";
      state.status.statu = "succeeded";
      state.currentTeam.members = action.payload;
    })
    .addCase(addNewMember.rejected, (state, action) => {
      state.error.type = "addMember";
      state.status.statu = "failed";
      state.error.error = action.error.message;
    });
}
function getMemberBuilder(builder) {
  builder
    .addCase(getTeamMembers.pending, (state) => {
      state.status.type = "getMember";
      state.status.statu = "loading";
    })
    .addCase(getTeamMembers.fulfilled, (state, action) => {
      state.status.type = "getMember";
      state.status.statu = "succeeded";
      state.members = action.payload;
    })
    .addCase(getTeamMembers.rejected, (state, action) => {
      state.error.type = "getMember";
      state.status.statu = "failed";
      state.error.error = action.error.message;
    });
}
