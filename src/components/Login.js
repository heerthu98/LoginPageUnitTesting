import React, { useState } from "react";

import { BsFillPersonFill } from "react-icons/bs";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login__container container">
      <form className="login__form">
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
          <a href="#">Forgot Password? </a>
        </div>

        <button className="login__btn">Login</button>
      </form>
    </div>
  );
}

export default Login;
