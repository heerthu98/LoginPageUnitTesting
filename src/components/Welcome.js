import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser, logout } from "../features/userSlice";

function Welcome() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  function handleLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  return (
    <div className="welcome__container">
      <h1>
        Welcome <span className="welcome__userName">{user.email}</span>
      </h1>
      <button className="login__btn" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Welcome;
