import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createConversation } from "../../services/apiMessages";

export const createNewConversation = createAsyncThunk(
  "messages/createConversation",
  async (obj) => {
    const data = await createConversation(obj);
    return data;
  }
);
const initialState = {
  messages: [],
  currentConversation: null,
  status: {},
  error: "",
};
const messagesReducer = createSlice({
  name: "messages",
  initialState,
  extraReducers(builder) {
    createNewConversationBuilder(builder);
  },
});

function createNewConversationBuilder(builder) {
  builder
    .addCase(createNewConversation.pending, (state, action) => {
      state.status = { type: "create", statu: "loading" };
    })
    .addCase(createNewConversation.fulfilled, (state, action) => {
      state.status = { type: "create", statu: "succeeded" };
      state.messages = [...state.messages, action.payload];
    })
    .addCase(createNewConversation.rejected, (state, action) => {
      state.status = { type: "create", statu: "failed" };
      state.error = action.error.message;
    });
}

export default messagesReducer.reducer;
