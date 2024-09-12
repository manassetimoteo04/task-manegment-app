import { useEffect, useState } from "react";
import { useApp } from "../../contexts/AppProvider";
import {
  getReadNumber,
  getTeamImageName,
  getUserImageName,
} from "../../services/apiHelpers";
import { useDispatch, useSelector } from "react-redux";
import { setCurrConversation } from "./messagesSlice";
import { formateMessageDate } from "../../utils/helpers";
import { useGetUserImg } from "../../hooks/useGetUserImg";

function MessagesBox({ conv, index }) {
  const [inforData, setInforData] = useState({});
  const [unRead, setUnread] = useState(0);
  const { currentUser } = useSelector((state) => state.auth);
  const { setMobileShowMessage, dispatch } = useApp();
  const numIndex = index !== 0 ? index : 1;
  const id = conv.members?.filter((mem) => mem !== currentUser.id);
  const [user] = useGetUserImg(conv?.last_message?.send_by);
  const DISPATCH = useDispatch();
  useEffect(() => {
    async function getData() {
      if (conv.is_group) {
        const data = await getTeamImageName(conv.team_id);
        setInforData(data);
      }
      if (!conv.is_group) {
        const data = await getUserImageName(id);
        setInforData(data, id);
      }
      const unreads = await getReadNumber({
        conId: conv.id,
        name: inforData.name,
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
        DISPATCH(setCurrConversation(conv?.id));
        dispatch({
          type: "messages/setCurrentConv",
          payload: {
            id: conv?.is_group ? conv?.team_id : id,
            isGroup: conv?.is_group,
          },
        });
        setUnread(0);
      }}
    >
      <img
        src={
          inforData?.image || inforData.avatar
            ? inforData?.image || inforData.avatar
            : "default-user.jpg"
        }
        alt={inforData.name}
      />
      <div className="messages-content-box">
        <div>
          <h3>{inforData.name}</h3>
          <span className="message-date">
            {formateMessageDate(conv?.last_message?.created_at || new Date())}
          </span>
        </div>
        <div>
          <p className="content">
            {conv?.last_message?.send_by === currentUser.id
              ? "you: "
              : conv?.is_group
              ? user?.name?.split(" ").at(0) + ": "
              : ""}
            {conv?.last_message?.content}
          </p>
          {unRead > 0 && (
            <span className="unread-messages">
              {unRead > 9 ? "9+" : unRead}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default MessagesBox;
