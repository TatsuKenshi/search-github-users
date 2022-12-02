import React from "react";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";
import "../styles/components/Card.scss";

const Card = () => {
  const { githubUser } = React.useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;

  return (
    <div className="user-main">
      <div className="user-title">
        <div className="user-tag">user</div>
      </div>
      <section>
        <header>
          <img
            src={avatar_url}
            alt={name}
            width="150px"
            height="150px"
            style={{ borderRadius: "50%" }}
          />
          <div className="header-info">
            <h4 className="name">{name}</h4>
            <p className="twitter">@{twitter_username || "not provided"}</p>
          </div>
          <a href={html_url} className="html">
            visit
          </a>
        </header>

        <article>
          <p className="bio">{bio}</p>
          <p className="company">
            <MdBusiness></MdBusiness> {company}
          </p>
          <p className="location">
            <MdLocationOn></MdLocationOn> {location || "earth"}
          </p>
          <p className="blog">
            <a href={`https://${blog}`}>
              <MdLink></MdLink>
              {blog}
            </a>
          </p>
        </article>
      </section>
    </div>
  );
};

export default Card;
