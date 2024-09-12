import { useEffect, useState } from "react";
import { MessageSquare } from "react-feather";
import { getUserImageName } from "../../services/apiHelpers";
import { useApp } from "../../contexts/AppProvider";
import { useSelector } from "react-redux";

function ConvMemberBox({ member }) {
  const { currentUser } = useSelector((state) => state.auth);
  const [user, setUser] = useState({});
  const { dispatch } = useApp();
  useEffect(() => {
    async function getData() {
      const data = await getUserImageName(member);
      setUser(data);
    }
    getData();
  }, []);
  function handleClick() {
    dispatch({
      type: "messages/setCurrentConv",
      payload: { id: member, isGroup: false },
    });
  }
  return (
    <div className="conv-member-box">
      <img
        src={user?.avatar ? user.avatar : "default-user.jpg"}
        alt={user.name}
      />
      <div className="infor">
        <h4>{user.name}</h4>
        {member !== currentUser.id && (
          <button onClick={handleClick}>
            <MessageSquare />
          </button>
        )}
      </div>
    </div>
  );
}

export default ConvMemberBox;
