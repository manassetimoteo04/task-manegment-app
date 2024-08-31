import { Heart, Mail, Phone, User } from "react-feather";
import { useSelector } from "react-redux";

function UserInfoBox() {
  const { currentUser } = useSelector((state) => state.auth);
  const { name, bio, email } = currentUser;
  return (
    <div className="user-infor-box">
      <div className="infor-box">
        <User />

        <div>
          <span className="infor-tag">Name</span>
          <p>{name}</p>
        </div>
      </div>
      <div className="infor-box">
        <Mail />
        <div>
          <span className="infor-tag">Email</span>
          <p>{email}</p>
        </div>
      </div>{" "}
      <div className="infor-box">
        <Phone />
        <div>
          <span className="infor-tag">Phone</span>
          <p>+244 940 407 979</p>
        </div>
      </div>
      <div className="infor-box">
        <Heart />

        <div>
          <span className="infor-tag">Bio</span>
          <p>{bio}</p>
        </div>
      </div>{" "}
    </div>
  );
}

export default UserInfoBox;
