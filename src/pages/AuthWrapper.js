import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import loadingGif from "../images/preloader.gif";
import "../styles/pages/AuthWrapper.scss";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return (
      <div className="loading-div">
        <img src={loadingGif} alt="loading spinner" className="loading-img" />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>{error.message}</h1>
      </div>
    );
  }

  return <>{children}</>;
};

export default AuthWrapper;
