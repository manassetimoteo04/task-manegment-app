import { Plus } from "react-feather";
import TaskCommentList from "./TaskCommentList";

function TaskComments() {
  return (
    <div className="task-comment">
      <span className="task-tag">Comments</span>
      <form action="" className="task-comment-form">
        <input type="text" placeholder="Add comment" />
        <button>
          <Plus />
        </button>
      </form>
      <TaskCommentList />
    </div>
  );
}

export default TaskComments;
