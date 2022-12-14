import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../images/login-img.svg";
import "../styles/pages/Login.scss";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div className="container">
      <img src={loginImg} alt="github user" />
      <h1>Github User</h1>
      <button className="btn" onClick={loginWithRedirect}>
        Login / Sign up
      </button>
    </div>
  );
};

export default Login;
