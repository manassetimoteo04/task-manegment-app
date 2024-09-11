import { useRef } from "react";
import LoginForm from "./LoginForm";

function LoginLayout() {
  const refNum = useRef(0);
  return (
    <section className="section-login">
      <h1>Login</h1>
      <LoginForm refNum={refNum} />
    </section>
  );
}

export default LoginLayout;
