import { useEffect, useState } from "react";
import { MessageSquare } from "react-feather";
import { getUserImageName } from "../../services/apiHelpers";

function ConvMemberBox({ member, index }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    async function getData() {
      const data = await getUserImageName(member);
      setUser(data);
    }
    getData();
  }, []);
  function handleDele() {
    alert(index);
  }
  console.log(user, member);
  return (
    <div className="conv-member-box">
      <img
        src={user?.avatar ? user.avatar : "default-user.jpg"}
        alt={user.name}
      />
      <div className="infor">
        <h4>{user.name}</h4>
        <button onClick={handleDele}>
          <MessageSquare />
        </button>
      </div>
    </div>
  );
}

export default ConvMemberBox;
