import { useEffect, useState } from "react";
import { useApp } from "../../contexts/AppProvider";
import { getTeamImageName } from "../../services/apiHelpers";
import { useDispatch } from "react-redux";
import { setCurrConversation } from "./messagesSlice";

function MessagesBox({ conv }) {
  const { setMobileShowMessage, dispatch } = useApp();
  const [group, setGroup] = useState({});
  const DISPATCH = useDispatch();
  useEffect(() => {
    async function getData() {
      const data = await getTeamImageName(conv.team_id);
      setGroup(data);
    }
    getData();
  }, []);
  return (
    <div
      className="messages-box"
      onClick={() => {
        setMobileShowMessage(true);
        DISPATCH(setCurrConversation(conv.id));
        dispatch({ type: "messages/setCurrentConv", payload: conv.team_id });
      }}
    >
      <img
        src={group?.image ? group?.image : "default-user.jpg"}
        alt={group.name}
      />
      <div className="messages-content-box">
        <div>
          <h3>{group.name}</h3>
          <span className="message-date">10h30</span>
        </div>
        <div>
          <p className="content">{conv?.last_message?.content}</p>
          <span className="unread-messages">2</span>
        </div>
      </div>
    </div>
  );
}

export default MessagesBox;
