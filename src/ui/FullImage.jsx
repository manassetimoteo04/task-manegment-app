import { X } from "react-feather";

function FullImage({ url, name }) {
  return (
    <div className="full-image">
      <div>
        <button>
          <X />
        </button>
        <img src="me.jpg" alt="" />
      </div>
    </div>
  );
}

export default FullImage;
