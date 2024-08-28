import { useRef } from "react";

function Overlay({ children }) {
  return <div className="overlay">{children}</div>;
}

export default Overlay;
