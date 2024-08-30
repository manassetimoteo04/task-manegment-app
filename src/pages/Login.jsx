import { useEffect } from "react";
import LoginLayout from "../features/authentication/LoginLayout";
import { useApp } from "../contexts/AppProvider";
import Popup from "../ui/Popup";

function Login() {
  const { showPopup } = useApp();

  useEffect(() => {
    document.title = "Login | Login to your account to get startet";
  }, []);
  return (
    <main>
      <LoginLayout />
      {showPopup && <Popup />}
    </main>
  );
}

export default Login;
