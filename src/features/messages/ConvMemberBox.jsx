import { MessageSquare } from "react-feather";

function ConvMemberBox() {
  return (
    <div className="conv-member-box">
      <img src="me.jpg" alt="" />
      <div className="infor">
        <h4>Manasse Timóteo</h4>
        <button>
          <MessageSquare />
        </button>
      </div>
    </div>
  );
}

export default ConvMemberBox;
