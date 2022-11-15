import React from "react";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";
import "../styles/components/Search.scss";

const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, searchGithubUser, isError, isLoading } =
    React.useContext(GithubContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
    searchGithubUser(user);
  };

  return (
    <section className="search-section">
      <div className="error-div">
        {isError.show && (
          <div className="error-wrapper">
            <p>{isError.msg}</p>
          </div>
        )}
      </div>
      <div className="search-section-center">
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch size={24} />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button className="submit-btn" type="submit">
                Search
              </button>
            )}
          </div>
        </form>
        <h3>Requests: {requests} / 60</h3>
      </div>
    </section>
  );
};

export default Search;
