import { useDispatch, useSelector } from "react-redux";
import TaskCommentItem from "./TaskCommentItem";
import { useEffect } from "react";
import { getCurrTaskComments } from "./taskSlice";
import ListEmpty from "../../ui/ListEmpty";
import Spinner from "../../ui/Spinner";
function TaskCommentList() {
  const { taskComment, currentTask, commentStatus } = useSelector(
    (state) => state.tasks
  );
  const DISPATCH = useDispatch();
  useEffect(() => {
    DISPATCH(getCurrTaskComments(currentTask.id));
  }, []);
  return (
    <ul className="task-comment-list">
      {commentStatus === "loading" ? (
        <Spinner />
      ) : taskComment.length > 0 ? (
        taskComment.map((comment) => (
          <TaskCommentItem comment={comment} key={comment.id} />
        ))
      ) : (
        <ListEmpty>Sem nenhum comentário</ListEmpty>
      )}
    </ul>
  );
}

export default TaskCommentList;
