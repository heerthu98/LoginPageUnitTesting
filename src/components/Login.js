import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    dispatch(
      login({
        email: email,
        password: password,
        loggedIn: true,
      })
    );
  }

  return (
    <div className="login__container container">
      <form className="login__form" onSubmit={(e) => handleLogin(e)}>
        <div className="Login__profile">
          <BsFillPersonFill size={90} />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="login__forgotPwd">
          <div className="login__remmberMe">
            <input type="checkbox" />

            <label>Remember Me</label>
          </div>
          <a href="/forgot-password">Forgot Password? </a>
        </div>

        <button className="login__btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
