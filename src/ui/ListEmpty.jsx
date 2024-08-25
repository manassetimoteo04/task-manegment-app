import { Smile } from "react-feather";

function ListEmpty({ children }) {
  return (
    <div className="list-empty">
      <Smile />
      {children}
    </div>
  );
}

export default ListEmpty;
