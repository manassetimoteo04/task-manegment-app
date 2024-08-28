import ConvMemberBox from "./ConvMemberBox";

function ConvMemberList() {
  return (
    <div className="conv-member-list">
      <ConvMemberBox index={2} />
      <ConvMemberBox index={3} />
      <ConvMemberBox index={4} />
      <ConvMemberBox index={1} />
    </div>
  );
}

export default ConvMemberList;
