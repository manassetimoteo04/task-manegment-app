import { useState } from "react";
import { Image, Mic, Send } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import { createNewConversation } from "./messagesSlice";

function ConversationSendMessageForm() {
  const { currentUser } = useSelector((state) => state.auth);
  const { currentConversation } = useApp();
  const [value, setValue] = useState("");
  const DISPATCH = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    const newCon = {
      message: {
        send_by: currentUser.id,
        content: value,
      },
      teamId: currentConversation,
    };
    if (value) DISPATCH(createNewConversation(newCon));
  }
  return (
    <form className="conversation-send-message-form" onSubmit={handleSubmit}>
      <img
        src={currentUser?.avatar ? currentUser.avatar : "default-user.jpg"}
        alt=""
      />
      <input
        type="text"
        placeholder="Write here..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
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
