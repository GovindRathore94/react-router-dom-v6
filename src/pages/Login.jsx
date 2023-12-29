import React from "react";
import { useAuth } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const { setIsLoggedIn } = useAuth();
  const navigate = useNavigate();

  function login() {
    setIsLoggedIn(true);
    navigate("/posts", { replace: true });
  }

  return (
    <div>
      <h1>Login</h1>

      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
