import React from "react";
import { GithubContext } from "../context/context";

const Followers = () => {
  const { followers } = React.useContext(GithubContext);

  return (
    <div
      className="followers"
      style={{
        width: "300px",
        height: "250px",
        overflow: "scroll",
        marginLeft: "20px",
      }}
    >
      {followers.map((follower, index) => {
        const { avatar_url: img, html_url, login } = follower;
        return (
          <article key={index} style={{ display: "flex" }}>
            <div>
              <img
                src={img}
                alt={login}
                width="50px"
                height="50px"
                style={{ borderRadius: "50%" }}
              />
            </div>
            <div>
              <h4>{login}</h4>
              <a href={html_url}>{html_url}</a>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Followers;
