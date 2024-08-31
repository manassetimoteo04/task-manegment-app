import UserEditForms from "./UserEditForms";
import UserSettHeader from "./UserSettHeader";

function UserEdit() {
  return (
    <div className="user-edit">
      <UserSettHeader>Edit Information</UserSettHeader>
      <UserEditForms />
    </div>
  );
}

export default UserEdit;
