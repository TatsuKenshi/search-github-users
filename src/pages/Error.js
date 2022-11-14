import React from "react";
import { Link } from "react-router-dom";
import "../styles/pages/Error.scss";

const Error = () => {
  return (
    <div className="errorDiv">
      <h1>404</h1>
      <h3>Sorry, this page doesn't exist...</h3>
      <Link to="/">
        <button className="btn">Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
