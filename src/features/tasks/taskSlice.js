import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  changeTaskStatu,
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
    return data;
  }
);
export const getAllTasks = createAsyncThunk(
  "tasks/getAllTasks",
  async (page) => {
    const data = await getTasks(page);
    return data;
  }
);
export const updateTaskStatus = createAsyncThunk(
  "tasks/updateStatus",
  async (statu) => {
    const data = await changeTaskStatu(statu);
    console.log("tasks :", data);
    return data;
  }
);
const initialState = {
  allTasks: [],
  projectTasks: [],
  taskComment: [],
  currentTask: {},
  count: 0,
  projectCount: 0,
  status: {},
  createStatus: "",
  getStatus: "",
  commentStatus: "",
  error: "",
  isLoading: true,
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
    updateTaskStatusBuilder(builder);
    //TASKS COMMENT BUILDERS
    getCommentsBuilder(builder);
    createCommentBuilder(builder);
  },
});

function createTaskBuilder(builder) {
  // BUILDER FOR CREATING NEW TASKS
  builder
    .addCase(createNewTask.pending, (state) => {
      state.status.type = "create";
      state.status.statu = "loading";
    })
    .addCase(createNewTask.fulfilled, (state, action) => {
      state.projectTasks = [action.payload, ...state.projectTasks];
      state.status.type = "create";
      state.status.statu = "succeeded";
    })
    .addCase(createNewTask.rejected, (state, action) => {
      state.status.type = "create";
      state.status.statu = "failed";
      state.error = action.error.message;
    });
}
function loaginTasksBuilder(builder) {
  //BUILDER FOR LOADING PROJECT TASKS
  builder
    .addCase(gettingProjectTasks.pending, (state, action) => {
      state.status.type = "load";
      state.status.statu = "loading";
      state.isLoading = true;
    })
    .addCase(gettingProjectTasks.fulfilled, (state, action) => {
      state.projectTasks = action.payload.task;
      state.projectCount = action.payload.count;
      state.isLoading = false;
      state.status.type = "load";
      state.status.statu = "succeeded";
    })
    .addCase(gettingProjectTasks.rejected, (state, action) => {
      state.status.type = "load";
      state.status.statu = "failed";
      state.error = action.error.message;
      state.isLoading = false;
    });
}
function gettingCurrTaskBuilder(builder) {
  //BUILDER FOR GETTING THE CURRENT TASK
  builder
    .addCase(getCurrentTask.pending, (state, action) => {
      state.status.type = "get";
      state.status.statu = "loading";
    })
    .addCase(getCurrentTask.fulfilled, (state, action) => {
      state.currentTask = action.payload;
      state.status.type = "get";
      state.status.statu = "succeeded";
    })
    .addCase(getCurrentTask.rejected, (state, action) => {
      state.status.type = "get";
      state.status.statu = "failed";
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
      state.status.type = "getAll";
      state.status.statu = "loading";
    })
    .addCase(getAllTasks.fulfilled, (state, action) => {
      state.allTasks = action.payload.task;
      state.count = action.payload.count;
      state.status.type = "getAll";
      state.status.statu = "succeeded";
    })
    .addCase(getAllTasks.rejected, (state, action) => {
      state.status.type = "getAll";
      state.status.statu = "failed";
      state.error = action.error.message;
    });
}
function updateTaskStatusBuilder(builder) {
  builder
    .addCase(updateTaskStatus.pending, (state, action) => {
      state.status.type = "updateStatus";
      state.status.statu = "loading";
    })
    .addCase(updateTaskStatus.fulfilled, (state, action) => {
      state.allTasks = state.allTasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      state.projectTasks = state.projectTasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      state.currentTask = action.payload;
      state.status.type = "updateStatus";
      state.status.statu = "succeeded";
    })
    .addCase(updateTaskStatus.rejected, (state, action) => {
      state.status.type = "updateStatus";
      state.status.statu = "failed";
      state.error = action.error.message;
    });
}

export default tasksReducer.reducer;
