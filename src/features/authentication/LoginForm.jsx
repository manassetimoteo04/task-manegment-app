import { Lock, Mail } from "react-feather";
import InputBox from "../../ui/InputBox";
import Button from "../../ui/Button";
import { useNavigate } from "react-router";

function LoginForm() {
  const navigate = useNavigate();
  return (
    <form className="login-form">
      <div className="login-group">
        <label htmlFor="email">Email</label>
        <InputBox>
          <Mail />
          <input type="email" id="email" />
        </InputBox>
      </div>
      <div className="login-group">
        <label htmlFor="password">Password</label>
        <InputBox>
          <Lock />
          <input type="password" id="password" />
        </InputBox>
      </div>
      <Button type="secondary">Login</Button>
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
