import React from "react";
import { GithubContext } from "../context/context";
import { GoRepo, GoGist } from "react-icons/go";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import "../styles/components/Info.scss";

const Info = () => {
  const { githubUser } = React.useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;

  const userInfoItems = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "hotpink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "mediumspringgreen",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "magenta",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "cyan",
    },
  ];

  return (
    <section className="info-section">
      <div className="info-section-center">
        {userInfoItems.map((item) => {
          return <Item key={item.id} {...item}></Item>;
        })}
      </div>
    </section>
  );
};

const Item = ({ icon, label, value, color }) => {
  console.log(color);
  return (
    <article
      className="item"
      style={{ backgroundColor: `${color}`, opacity: "0.8" }}
    >
      <h3>
        {icon} {value}
      </h3>
      <p>{label}</p>
    </article>
  );
};

export default Info;
