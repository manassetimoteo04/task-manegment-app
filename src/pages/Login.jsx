import { useEffect } from "react";
import LoginLayout from "../features/authentication/LoginLayout";

function Login() {
  useEffect(() => {
    document.title = "Login | Login to your account to get startet";
  }, []);
  return (
    <main>
      <LoginLayout />
    </main>
  );
}

export default Login;
