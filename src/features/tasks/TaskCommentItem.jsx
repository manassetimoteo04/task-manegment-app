function TaskCommentItem() {
  return (
    <li className="comment-task">
      <p className="comment-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatem
        quia beatae doloribus sequi voluptate dolores ratione minus reiciendis
      </p>
      <div>
        <div>
          <img src="me.jpg" alt="" className="comment-user-img" />
          <span className="username">Manasse</span>
        </div>
        <span>8 min</span>
      </div>
    </li>
  );
}

export default TaskCommentItem;
