import { useGetUserImg } from "../../hooks/useGetUserImg";

function TaskCommentItem({ comment }) {
  const [user] = useGetUserImg(comment.created_by);
  console.log(comment);
  return (
    <li className="comment-task">
      <p className="comment-text">{comment.text}</p>
      <div>
        <div>
          <img src={user.avatar} alt="" className="comment-user-img" />
          <span className="username">{user.name}</span>
        </div>
        <span>{new Date(comment.created_at).toDateString()}</span>
      </div>
    </li>
  );
}

export default TaskCommentItem;
