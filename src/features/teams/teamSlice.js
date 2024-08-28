import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createTeam, getTeams } from "../../services/apiTeam";

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
  console.log(data);
  return data;
});
const initialState = {
  teams: [],
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
