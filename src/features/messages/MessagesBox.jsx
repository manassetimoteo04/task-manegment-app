import { useEffect, useState } from "react";
import { useApp } from "../../contexts/AppProvider";
import { getReadNumber, getTeamImageName } from "../../services/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCurrConversation } from "./messagesSlice";
import { formateMessageDate } from "../../utils/helpers";

function MessagesBox({ conv, index }) {
  const [group, setGroup] = useState({});
  const [unRead, setUnread] = useState(0);
  const { currentUser } = useSelector((state) => state.auth);
  const { setMobileShowMessage, dispatch } = useApp();
  const numIndex = index !== 0 ? index : 1;
  const DISPATCH = useDispatch();
  useEffect(() => {
    async function getData() {
      const data = await getTeamImageName(conv.team_id);
      setGroup(data);
      const unreads = await getReadNumber({
        conId: conv.id,
        name: group.name,
        userId: currentUser.id,
      });
      setUnread(unreads);
    }
    getData();
  }, [numIndex, conv]);

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
          <span className="message-date">
            {formateMessageDate(conv.last_message.created_at)}
          </span>
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
