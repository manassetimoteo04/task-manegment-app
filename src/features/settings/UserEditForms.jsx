import { Heart, Mail, Phone, User } from "react-feather";
import EditForm from "./EditForm";
import { userUpdateInfor } from "../authentication/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

function UserEditForms() {
  const { currentUser } = useSelector((state) => state.auth);
  const { name, bio, email, phone } = currentUser;
  const DISPATCH = useDispatch();
  function onSubmits(data) {
    DISPATCH(userUpdateInfor(data));
  }
  return (
    <div className="user-edit-forms">
      <EditForm
        icon={<User />}
        defValue={name}
        label={"Name"}
        table={"name"}
        onSubmit={onSubmits}
      />
      <EditForm
        icon={<Mail />}
        defValue={email}
        label={"Email"}
        table={"email"}
        onSubmit={onSubmits}
      />
      <EditForm
        icon={<Phone />}
        defValue={phone}
        label={"Phone"}
        table={"phone"}
        onSubmit={onSubmits}
      />
      <EditForm
        icon={<Heart />}
        defValue={bio}
        label={"Bio"}
        table={"bio"}
        onSubmit={onSubmits}
      />
    </div>
  );
}

export default UserEditForms;
