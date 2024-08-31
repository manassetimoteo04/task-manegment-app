import UserInfoBox from "./UserInfoBox";
import UserSettHeader from "./UserSettHeader";

function UserGeneral() {
  return (
    <div className="user-general">
      <UserSettHeader>Geral</UserSettHeader>
      <UserInfoBox />
    </div>
  );
}

export default UserGeneral;
