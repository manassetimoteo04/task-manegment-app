import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  createTask,
  getProjectsTasks,
  getTask,
  getTasks,
} from "../../services/apiTasks";
import { createComment, getComments } from "../../services/apiComments";
export const createNewTask = createAsyncThunk(
  "tasks/createTask",
  async (task) => {
    const data = await createTask(task);
    console.log(data);
    return data[0];
  }
);
export const gettingProjectTasks = createAsyncThunk(
  "tasks/loadProjectTasks",
  async (projectId) => {
    const data = await getProjectsTasks(projectId);
    return data;
  }
);

export const getCurrentTask = createAsyncThunk(
  "tasks/getCurrentTask",
  async (id) => {
    const data = await getTask(id);
    return data[0];
  }
);
export const getCurrTaskComments = createAsyncThunk(
  "tasks/getComments",
  async (id) => {
    const data = await getComments(id);
    return data;
  }
);
export const createTaskComment = createAsyncThunk(
  "tasks/createComment",
  async (comment) => {
    const data = await createComment(comment);
    console.log(data);
    return data;
  }
);
export const getAllTasks = createAsyncThunk("tasks/getAllTasks", async () => {
  const data = await getTasks();
  return data;
});
const initialState = {
  allTasks: [],
  projectTasks: [],
  taskComment: [],
  currentTask: {},
  status: "",
  createStatus: "",
  getStatus: "",
  commentStatus: "",
  error: "",
};
const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    createTaskBuilder(builder);
    loaginTasksBuilder(builder);
    gettingCurrTaskBuilder(builder);
    getAllTasksBuilder(builder);
    //TASKS COMMENT BUILDERS
    getCommentsBuilder(builder);
    createCommentBuilder(builder);
  },
});

function createTaskBuilder(builder) {
  // BUILDER FOR CREATING NEW TASKS
  builder
    .addCase(createNewTask.pending, (state) => {
      state.status = "loading";
    })
    .addCase(createNewTask.fulfilled, (state, action) => {
      state.projectTasks = [action.payload, ...state.projectTasks];
      state.status = "succeeded";
    })
    .addCase(createNewTask.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
}
function loaginTasksBuilder(builder) {
  //BUILDER FOR LOADING PROJECT TASKS
  builder
    .addCase(gettingProjectTasks.pending, (state, action) => {
      state.createStatus = "loading";
    })
    .addCase(gettingProjectTasks.fulfilled, (state, action) => {
      state.projectTasks = action.payload;
      state.createStatus = "succeeded";
    })
    .addCase(gettingProjectTasks.rejected, (state, action) => {
      state.createStatus = "failed";
      state.error = action.error.message;
    });
}
function gettingCurrTaskBuilder(builder) {
  //BUILDER FOR GETTING THE CURRENT TASK

  builder
    .addCase(getCurrentTask.pending, (state, action) => {
      state.getStatus = "loading";
    })
    .addCase(getCurrentTask.fulfilled, (state, action) => {
      state.currentTask = action.payload;
      state.getStatus = "succeeded";
    })
    .addCase(getCurrentTask.rejected, (state, action) => {
      state.getStatus = "failed";
      state.error = action.error.message;
    });
}

function getCommentsBuilder(builder) {
  builder
    .addCase(getCurrTaskComments.pending, (state, action) => {
      state.commentStatus = "loading";
    })
    .addCase(getCurrTaskComments.fulfilled, (state, action) => {
      state.taskComment = action.payload;
      state.commentStatus = "succeeded";
    })
    .addCase(getCurrTaskComments.rejected, (state, action) => {
      state.commentStatus = "failed";
      state.error = action.error.message;
    });
}

function createCommentBuilder(builder) {
  builder
    .addCase(createTaskComment.pending, (state, action) => {
      state.commentStatus = "creating";
    })
    .addCase(createTaskComment.fulfilled, (state, action) => {
      state.taskComment = [action.payload, ...state.taskComment];
      state.commentStatus = "succeeded";
    })
    .addCase(createTaskComment.rejected, (state, action) => {
      state.commentStatus = "failed";

      state.error = action.error.message;
    });
}

function getAllTasksBuilder(builder) {
  builder
    .addCase(getAllTasks.pending, (state, action) => {
      state.status = "creating";
    })
    .addCase(getAllTasks.fulfilled, (state, action) => {
      state.allTasks = action.payload;
      state.status = "succeeded";
    })
    .addCase(getAllTasks.rejected, (state, action) => {
      state.status = "failed";

      state.error = action.error.message;
    });
}
export default tasksReducer.reducer;
