import { MessageSquare } from "react-feather";

function ConvMemberBox({ index }) {
  function handleDele() {
    alert(index);
  }
  return (
    <div className="conv-member-box">
      <img src="me.jpg" alt="" />
      <div className="infor">
        <h4>Manasse Timóteo</h4>
        <button onClick={handleDele}>
          <MessageSquare />
        </button>
      </div>
    </div>
  );
}

export default ConvMemberBox;
