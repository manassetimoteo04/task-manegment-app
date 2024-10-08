import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getRecentTasks,
  projectCount,
  tasksCount,
  teamsCount,
  teamsDash,
  todayTasksCount,
} from "../../services/apiDashboard";

export const getProjectCount = createAsyncThunk(
  "dashboard/projectCount",
  async (id) => {
    const data = await projectCount(id);
    return data;
  }
);
export const getTeamsCount = createAsyncThunk(
  "dashboard/teamsCount",
  async (id) => {
    const data = await teamsCount(id);
    return data;
  }
);
export const getTasksCount = createAsyncThunk(
  "dashboard/tasksCount",
  async (id) => {
    const data = await tasksCount(id);
    return data;
  }
);
export const getTodayTasksCount = createAsyncThunk(
  "dashboard/getTodayTasksCount",
  async (id) => {
    const data = await todayTasksCount(id);
    return data;
  }
);
export const getRecentTasksDash = createAsyncThunk(
  "dashboard/getRecentTasks",
  async (id) => {
    const data = await getRecentTasks(id);
    return data;
  }
);
export const getTeamsDash = createAsyncThunk(
  "dashboard/getTeamsDash",
  async (id) => {
    const data = await teamsDash(id);
    return data;
  }
);
const initialState = {
  projectCount: 0,
  teamsCount: 0,
  tasksCount: 0,
  todayTasksCount: 0,
  todaysTasks: [],
  teams: [],
  isLoading: true,
  error: "",
};
const dashboardReducer = createSlice({
  name: "dashboard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    getProjectCountBuilder(builder);
    getTeamsCountBuilder(builder);
    getTasksCountBuilder(builder);
    getTodayTasksCountBuilder(builder);
    getRecentTasksBuilder(builder);
    getTeamsDashBuilder(builder);
  },
});

function getProjectCountBuilder(builder) {
  builder
    .addCase(getProjectCount.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getProjectCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectCount = action.payload;
    })
    .addCase(getProjectCount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
function getTeamsCountBuilder(builder) {
  builder
    .addCase(getTeamsCount.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTeamsCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teamsCount = action.payload;
    })
    .addCase(getTeamsCount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
function getTasksCountBuilder(builder) {
  builder
    .addCase(getTasksCount.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTasksCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.tasksCount = action.payload;
    })
    .addCase(getTasksCount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
function getTodayTasksCountBuilder(builder) {
  builder
    .addCase(getTodayTasksCount.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTodayTasksCount.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todayTasksCount = action.payload;
    })
    .addCase(getTodayTasksCount.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
function getRecentTasksBuilder(builder) {
  builder
    .addCase(getRecentTasksDash.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getRecentTasksDash.fulfilled, (state, action) => {
      state.isLoading = false;
      state.recentTasks = action.payload;
    })
    .addCase(getRecentTasksDash.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
function getTeamsDashBuilder(builder) {
  builder
    .addCase(getTeamsDash.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getTeamsDash.fulfilled, (state, action) => {
      state.isLoading = false;
      state.teams = action.payload;
    })
    .addCase(getTeamsDash.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
}
export default dashboardReducer.reducer;
