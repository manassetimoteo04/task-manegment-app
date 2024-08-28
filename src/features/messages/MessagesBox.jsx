function MessagesBox() {
  return (
    <div className="messages-box">
      <img src="me.jpg" alt="" />
      <div className="messages-content-box">
        <div>
          <h3>Manasse Timóteo</h3>
          <span className="message-date">10h30</span>
        </div>
        <div>
          <p className="content">Hello Good Morning</p>
          <span className="unread-messages">2</span>
        </div>
      </div>
    </div>
  );
}

export default MessagesBox;
