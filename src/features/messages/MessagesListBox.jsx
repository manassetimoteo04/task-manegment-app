import { useSelector } from "react-redux";
import MessagesBox from "./MessagesBox";

function MessagesListBox() {
  const { conversationList } = useSelector((state) => state.messages);

  return (
    <div className="messages-list-box">
      {conversationList.map((conv, index) => (
        <MessagesBox conv={conv} key={conv.id} index={index} />
      ))}
    </div>
  );
}

export default MessagesListBox;
