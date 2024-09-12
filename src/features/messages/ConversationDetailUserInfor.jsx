import { Heart, Mail, Phone, User } from "react-feather";

function ConversationDetailUserInfor({ infor }) {
  return (
    <div className="conv-detail-infor">
      <div className="user-infor-box">
        <div className="infor-box">
          <Mail />
          <div>
            <span className="infor-tag">Email</span>
            <p>{infor.email}</p>
          </div>
        </div>{" "}
        <div className="infor-box">
          <Phone />
          <div>
            <span className="infor-tag">Phone</span>
            <p>{infor.phone}</p>
          </div>
        </div>
        <div className="infor-box">
          <Heart />

          <div>
            <span className="infor-tag">Bio</span>
            <p>{infor.bio}</p>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}

export default ConversationDetailUserInfor;
