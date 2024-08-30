import { useEffect } from "react";
import SignupLayout from "../features/authentication/SignupLayout";
import { useApp } from "../contexts/AppProvider";
import Popup from "../ui/Popup";

function Signup() {
  const { showPopup } = useApp();
  useEffect(() => {
    document.title = "Create Account | To get Started create an account";
  }, []);
  return (
    <main>
      <SignupLayout />
      {showPopup && <Popup />}
    </main>
  );
}

export default Signup;
