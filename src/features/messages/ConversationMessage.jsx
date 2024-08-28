function ConversationMessage({ type }) {
  return (
    <div className={`conversation-message ${type}-message`}>
      <img src="me.jpg" alt="" />
      <div className="message-content">
        <div>
          <span className="sender-name">Manasse Timóteo</span>
          <span className="sent-time">10h30</span>
        </div>
        <p className="message-text">Bom dia, como estás</p>
      </div>
    </div>
  );
}

export default ConversationMessage;
