import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

// domain dev-n7f-c1rx.us.auth0.com
// client id YGoSexIj9m5TQY4pK7QgwdYPLmiEhFdS
// client secret phXqJ4agNokU1kLs-7vYxbS5_heEf9wsz8yLhBMpgDTke9PyreW2-oTSk0X_8zPZ

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-n7f-c1rx.us.auth0.com"
      clientId="YGoSexIj9m5TQY4pK7QgwdYPLmiEhFdS"
      redirectUri={window.location.origin}
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
