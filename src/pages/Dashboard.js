import React from "react";
import { Info, Repos, User, Search, Navbar } from "../components";
import { GithubContext } from "../context/context";
import loadingImage from "../images/preloader.gif";
import "../styles/pages/Dashboard.scss";

const Dashboard = () => {
  const { isLoading } = React.useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading spinner" className="loading-img" />
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
