import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loginImg from "../images/login-img.svg";

const Login = () => {
  return (
    <div className="container">
      <img src={loginImg} alt="github user" />
      <h1>Github User</h1>
      <button className="btn">Login</button>
    </div>
  );
};

export default Login;
