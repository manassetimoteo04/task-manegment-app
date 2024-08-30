import { useNavigate } from "react-router";
import InputBox from "../../ui/InputBox";
import { Lock, Mail, User } from "react-feather";
import Button from "../../ui/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "./AuthSlice";

function SignupForm() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const DISPATCH = useDispatch();
  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirm) return;
    if (password !== confirm) return alert("Confirm must be the same");
    console.log(email, password);
    DISPATCH(signUp({ email, password, name }));
  }
  return (
    <form className="login-form" onSubmit={handleSubmit}>
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
