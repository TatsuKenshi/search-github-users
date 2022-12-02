import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import { GithubContext } from "../context/context";
import loadingImage from "../images/preloader.gif";
import "../styles/pages/Dashboard.scss";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main style={{ display: "flex", justifyContent: "center" }}>
        <div className="loading-div">
          <img
            src={loadingImage}
            alt="loading spinner"
            className="loading-img"
          />
        </div>
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <Search />
      <Info />
      <User />
      <Repos />
    </main>
  );
};

export default Dashboard;
