import React from "react";
import { GithubContext } from "../context/context";
import "../styles/components/Followers.scss";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <div className="followers">
      <div className="followers-title">
        <div className="followers-tag">followers</div>
      </div>

      <div className="followers-container">
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <article
              key={index}
              style={{ display: "flex" }}
              className="single-follower"
            >
              <div className="image-div">
                <img className="image" src={img} alt={login} />
              </div>
              <div className="info-div">
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Followers;
