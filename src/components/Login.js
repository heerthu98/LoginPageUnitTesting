import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { BsFillPersonFill } from "react-icons/bs";
import { login } from "../features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const dispatch = useDispatch();

  function handleLogin(e) {
    e.preventDefault();

    let isValid = true;

    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (
      !/"(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
        password
      )
    ) {
      setPasswordError(
        "Password must contain at least 8 characters including one letter, one number and one special character"
      );
      isValid = false;
    } else {
      setPasswordError("");
    }

    if (isValid) {
      dispatch(
        login({
          email: email,
          password: password,
          loggedIn: true,
        })
      );
    }
  }

  return (
    <div className="login__container container">
      <form className="login__form" onSubmit={(e) => handleLogin(e)} noValidate>
        <div className="Login__profile">
          <BsFillPersonFill size={90} />
        </div>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className="error">{emailError}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <p className="error">{passwordError}</p>}

        <div className="login__forgotPwd">
          <div className="login__remmberMe">
            <input type="checkbox" />

            <label>Remember Me</label>
          </div>
          <a href="/forgot-password">Forgot Password? </a>
        </div>

        <button data-testid="submit" className="login__btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
