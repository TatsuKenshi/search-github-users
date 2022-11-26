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
      color: "indianred",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "teal",
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
      color: "dodgerblue",
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
