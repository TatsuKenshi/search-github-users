import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

  const isUser = isAuthenticated && user;

  return (
    <nav>
      {isUser && user?.picture && <img src={user?.picture} alt={user?.name} />}

      {isUser && user?.name && (
        <h4>
          Welcome, <strong>{user.name.toUpperCase()}</strong>{" "}
        </h4>
      )}
      {isUser ? (
        <button
          onClick={() => {
            logout({ returnTo: window.location.origin });
          }}
        >
          Logout
        </button>
      ) : (
        <button onClick={loginWithRedirect}>Login</button>
      )}
    </nav>
  );
};

export default Navbar;
