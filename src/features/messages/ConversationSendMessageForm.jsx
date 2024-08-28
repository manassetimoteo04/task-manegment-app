import { Image, Mic, Send } from "react-feather";

function ConversationSendMessageForm() {
  return (
    <form className="conversation-send-message-form">
      <img src="me.jpg" alt="" />
      <input type="text" placeholder="Write here..." />
      <div className="files-msg">
        <button>
          <Mic />
        </button>
        <button>
          <Image />
        </button>
      </div>
      <button className="btn-send-message">
        <Send />
      </button>
    </form>
  );
}

export default ConversationSendMessageForm;
