import { Plus } from "react-feather";
import TaskCommentList from "./TaskCommentList";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTaskComment } from "./taskSlice";
import ButtonSpinner from "../../ui/ButtonSpinner";
function TaskComments() {
  const [text, setText] = useState("");
  const { currentTask, commentStatus } = useSelector((state) => state.tasks);
  const DISPATCH = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    // if (!text || currentTask.id) return;
    const comment = {
      text,
      createdBy: "",
      createdFrom: currentTask.id,
    };
    DISPATCH(createTaskComment(comment));
  }
  return (
    <div className="task-comment" onSubmit={handleSubmit}>
      <span className="task-tag">Comments</span>
      <form action="" className="task-comment-form">
        <input
          type="text"
          placeholder="Add comment"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button>
          {commentStatus === "creating" ? <ButtonSpinner /> : <Plus />}
        </button>
      </form>
      <TaskCommentList />
    </div>
  );
}

export default TaskComments;
