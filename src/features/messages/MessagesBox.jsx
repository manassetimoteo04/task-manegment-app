import { useEffect, useState } from "react";
import { useApp } from "../../contexts/AppProvider";
import { getReadNumber, getTeamImageName } from "../../services/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCurrConversation } from "./messagesSlice";

function MessagesBox({ conv, index }) {
  const [group, setGroup] = useState({});
  const [unRead, setUnread] = useState(0);
  const { currentUser } = useSelector((state) => state.auth);
  const { setMobileShowMessage, dispatch } = useApp();

  const DISPATCH = useDispatch();
  useEffect(() => {
    async function getData() {
      const data = await getTeamImageName(conv.team_id);
      setGroup(data);
      const unreads = await getReadNumber({
        conId: conv.id,
        userId: currentUser.id,
      });
      setUnread(unreads);
    }
    getData();
  }, [index, conv]);

  return (
    <div
      className="messages-box"
      onClick={() => {
        setMobileShowMessage(true);
        DISPATCH(setCurrConversation(conv.id));
        dispatch({ type: "messages/setCurrentConv", payload: conv.team_id });
        setUnread(0);
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
          {unRead > 0 && <span className="unread-messages">{unRead}</span>}
        </div>
      </div>
    </div>
  );
}

export default MessagesBox;
