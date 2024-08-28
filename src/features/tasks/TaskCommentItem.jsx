function TaskCommentItem({ comment }) {
  return (
    <li className="comment-task">
      <p className="comment-text">{comment.text}</p>
      <div>
        <div>
          <img src="me.jpg" alt="" className="comment-user-img" />
          <span className="username">Manasse</span>
        </div>
        <span>{new Date(comment.created_at).toDateString()}</span>
      </div>
    </li>
  );
}

export default TaskCommentItem;
