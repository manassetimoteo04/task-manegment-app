import { useSelector } from "react-redux";
import MessagesBox from "./MessagesBox";

function MessagesListBox() {
  const { conversationList } = useSelector((state) => state.messages);
  return (
    <div className="messages-list-box">
      {conversationList.map((conv) => (
        <MessagesBox conv={conv} key={conv.id} />
      ))}
    </div>
  );
}

export default MessagesListBox;
