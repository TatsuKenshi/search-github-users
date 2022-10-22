import React from "react";
import { GithubContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";

const Info = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const userInfoItems = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section">
      <div className="section-center" style={{ display: "flex" }}>
        {userInfoItems.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  return (
    <article style={{ marginRight: "20px" }} className="item">
      <span className={color}></span>
      <div>
        <h3>{value}</h3>
        <p>{label}</p>
      </div>
    </article>
  );
};

export default Info;
