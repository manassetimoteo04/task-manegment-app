import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createConversation,
  getConversations,
  getMessages,
  readMessages,
} from "../../services/apiMessages";

export const createNewConversation = createAsyncThunk(
  "messages/createConversation",
  async (obj) => {
    const data = await createConversation(obj);
    console.log("Conv", data);
    return data;
  }
);
export const getAllConversation = createAsyncThunk(
  "messages/getConversations",
  async (obj) => {
    const data = await getConversations(obj);
    return data;
  }
);
export const getConversationMessages = createAsyncThunk(
  "messages/getMessages",
  async (id) => {
    const data = await getMessages(id);
    return data;
  }
);
export const setReadMessages = createAsyncThunk(
  "messages/readMessages",
  async (list) => {
    await readMessages(list);
  }
);
const initialState = {
  conversationList: [],
  messages: [],
  conversationId: null,
  status: {},
  isLoading: true,
  error: "",
};
const messagesReducer = createSlice({
  name: "messages",
  reducers: {
    setCurrConversation(state, action) {
      state.conversationId = action.payload;
    },
    setNewMessage(state, action) {
      state.messages = [...state.messages, action.payload];
    },
    setRecentConversation(state, action) {
      state.conversationList = state.conversationList.filter(
        (con) => con.id !== action.payload.id
      );
      state.conversationList = [action.payload, ...state.conversationList];
    },
  },
  initialState,
  extraReducers(builder) {
    createNewConversationBuilder(builder);
    getAllConversationBuilder(builder);
    getConversationMessagesBuilder(builder);
    setReadMessagesBuilder(builder);
  },
});

function createNewConversationBuilder(builder) {
  builder
    .addCase(createNewConversation.pending, (state) => {
      state.status = { type: "create", statu: "loading" };
    })
    .addCase(createNewConversation.fulfilled, (state, action) => {
      state.status = { type: "create", statu: "succeeded" };
      state.conversationId = action.payload.conversation.id;
      state.messages = [...state.messages, action.payload.message];
      state.conversationList = state.conversationList.filter(
        (con) => con.id !== action.payload.conversation.id
      );
      state.conversationList = [
        action.payload.conversation,
        ...state.conversationList,
      ];
    })
    .addCase(createNewConversation.rejected, (state, action) => {
      state.status = { type: "create", statu: "failed" };
      state.error = action.error.message;
    });
}
function getAllConversationBuilder(builder) {
  builder
    .addCase(getAllConversation.pending, (state, action) => {
      state.status = { type: "getConversations", statu: "loading" };
    })
    .addCase(getAllConversation.fulfilled, (state, action) => {
      state.status = { type: "getConversations", statu: "succeeded" };
      state.conversationId = action.payload.conversationId;
      state.conversationList = action.payload;
    })
    .addCase(getAllConversation.rejected, (state, action) => {
      state.status = { type: "getConversations", statu: "failed" };
      state.error = action.error.message;
    });
}
function getConversationMessagesBuilder(builder) {
  builder
    .addCase(getConversationMessages.pending, (state) => {
      state.status = { type: "getMessages", statu: "loading" };
      state.isLoading = true;
    })
    .addCase(getConversationMessages.fulfilled, (state, action) => {
      state.status = { type: "getMessages", statu: "succeeded" };
      state.isLoading = false;

      state.messages = action.payload;
    })
    .addCase(getConversationMessages.rejected, (state, action) => {
      state.status = { type: "getMessages", statu: "failed" };
      state.isLoading = false;

      state.error = action.error.message;
    });
}
function setReadMessagesBuilder(builder) {
  builder
    .addCase(setReadMessages.pending, (state) => {
      state.status = { type: "readMessages", statu: "loading" };
    })
    .addCase(setReadMessages.fulfilled, (state, action) => {
      state.status = { type: "readMessages", statu: "succeeded" };
    })
    .addCase(setReadMessages.rejected, (state, action) => {
      state.status = { type: "readMessages", statu: "failed" };
      state.isLoading = false;

      state.error = action.error.message;
    });
}
export const { setCurrConversation, setNewMessage, setRecentConversation } =
  messagesReducer.actions;
export default messagesReducer.reducer;
