import { useNavigate } from "react-router";
import InputBox from "../../ui/InputBox";
import { Lock, Mail, User } from "react-feather";
import Button from "../../ui/Button";
import { useState } from "react";

function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  return (
    <form className="login-form">
      <div className="login-group">
        <label htmlFor="name">Full Name</label>
        <InputBox>
          <User />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>
      </div>
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
      <div className="login-group">
        <label htmlFor="password-c">Confirm Password</label>
        <InputBox>
          <Lock />
          <input
            type="password"
            id="password-c"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
          />
        </InputBox>
      </div>
      <Button type="secondary">Create account</Button>
      <div className="form-options">
        <span className="form-tag-opt">Already have an account?</span>
        <button
          onClick={(e) => {
            e.preventDefault();
            navigate("/login");
          }}
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
