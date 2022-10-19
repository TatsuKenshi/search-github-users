import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>Sorry, this page doesn't exist</h3>
      <Link to="/">
        <button>Back Home</button>
      </Link>
    </div>
  );
};

export default Error;
