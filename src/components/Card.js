import React from "react";
import { GithubContext } from "../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

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
    <div
      style={{
        background: "cyan",
        width: "700px",
        height: "300px",
      }}
    >
      <header
        style={{
          display: "flex",
          background: "aliceBlue",
          width: "max-content",
        }}
      >
        <img
          src={avatar_url}
          alt={name}
          width="100px"
          height="100px"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "not provided"}</p>
        </div>
        <a href={html_url}>visit</a>
      </header>
      <p className="bio">{bio}</p>
      <div className="link">
        <p>
          <MdBusiness></MdBusiness> {company}
        </p>
        <p>
          <MdLocationOn></MdLocationOn> {location || "earth"}
        </p>
        <p>
          <a href={`https://${blog}`}>
            <MdLink></MdLink>
            {blog}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Card;
