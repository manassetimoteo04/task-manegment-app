import { Lock, Mail } from "react-feather";
import InputBox from "../../ui/InputBox";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserSession, login, userLogged } from "./AuthSlice";
import ButtonSpinner from "../../ui/ButtonSpinner";
import { useAuth } from "./useAuth";
import { useShowPopup } from "../../hooks/useShowPopup";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("timoteoscript@gmail.com");
  const [password, setPassword] = useState("111111");
  const [showPopup] = useShowPopup();
  const { status, error } = useSelector((state) => state.auth);
  const DISPATCH = useDispatch();
  const { isAuthenticated, isLoading } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();
    if (!email || !password) return;
    DISPATCH(login({ email, password }));
  }
  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard", { replace: true });
  }, [isAuthenticated, navigate]);
  useEffect(() => {
    DISPATCH(userLogged());
  }, []);
  useEffect(() => {
    if (status.statu === "failed" && status.type === "login")
      showPopup({ type: "error", message: error });
  }, [status.statu]);
  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-group">
        <label htmlFor="email">Email</label>
        <InputBox>
          <Mail />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
      </div>
      <div className="login-group">
        <label htmlFor="password">Password</label>
        <InputBox>
          <Lock />
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
      </div>
      <Button type="secondary" disabled={isLoading}>
        {isLoading ? <ButtonSpinner /> : "Login"}
      </Button>
      <div className="form-options">
        <span className="form-tag-opt">Don't have account?</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/signup");
          }}
        >
          Create account
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
