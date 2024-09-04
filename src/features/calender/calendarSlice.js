import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { calendarTasks } from "../../services/apiCalendar";

const initialState = {
  calendarTasks: [],
  status: "",
  error: "",
};
export const getCalendarTasks = createAsyncThunk(
  "calendar/getCalendarTasks",
  async (teams) => {
    const data = calendarTasks(teams);
    return data;
  }
);
const calendarReducer = createSlice({
  name: "calendar",
  initialState,
  reducers: {},
  extraReducers(builder) {
    getCalendarTasksBuilder(builder);
  },
});
function getCalendarTasksBuilder(builder) {
  builder
    .addCase(getCalendarTasks.pending, (state, action) => {
      state.status = "loading";
    })
    .addCase(getCalendarTasks.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.calendarTasks = action.payload;
    })
    .addCase(getCalendarTasks.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error;
    });
}
export default calendarReducer.reducer;
