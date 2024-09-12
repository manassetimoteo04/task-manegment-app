import { useState } from "react";
import { Image, Mic, Send } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { useApp } from "../../contexts/AppProvider";
import { createNewConversation } from "./messagesSlice";
import ButtonSpinner from "../../ui/ButtonSpinner";
function ConversationSendMessageForm() {
  const { currentUser } = useSelector((state) => state.auth);
  const { status } = useSelector((state) => state.messages);
  const { currentConversation } = useApp();
  const [value, setValue] = useState("");
  const isLoading = status.type === "create" && status.statu === "loading";
  const DISPATCH = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (currentConversation.isGroup) {
      const newCon = {
        message: {
          send_by: currentUser.id,
          content: value,
        },
        teamId: currentConversation,
      };
      if (value) DISPATCH(createNewConversation(newCon));
    }
    if (!currentConversation.isGroup) {
      const newCon = {
        message: {
          send_by: currentUser.id,
          content: value,
        },
        idies: [currentUser.id, currentConversation.id],
      };
      if (value) DISPATCH(createNewConversation(newCon));
    }
    setValue("");
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
        readOnly={isLoading}
      />
      <div className="files-msg">
        {/* <button>
          <Mic />
        </button>
        <button>
          <Image />
        </button> */}
      </div>
      <button className="btn-send-message" disabled={isLoading}>
        {isLoading ? <ButtonSpinner /> : <Send />}
      </button>
    </form>
  );
}

export default ConversationSendMessageForm;
