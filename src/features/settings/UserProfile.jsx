import { useLocation } from "react-router";
import SettingMenu from "./SettingMenu";
import UserProfileHeader from "./UserProfileHeader";
import UserGeneral from "./UserGeneral";
import UserEdit from "./UserEdit";
import UserSecurity from "./UserSecurity";

function UserProfile() {
  const location = useLocation();
  return (
    <div className="user-profile">
      <UserProfileHeader></UserProfileHeader>
      <SettingMenu />
      {location.hash === "#geral" && <UserGeneral />}
      {!location.hash && <UserGeneral />}
      {location.hash === "#edit" && <UserEdit />}
      {location.hash === "#security" && <UserSecurity />}
    </div>
  );
}

export default UserProfile;
