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
          <input
            type="text"
            placeholder="user..."
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />
          {requests > 0 && !isLoading && (
            <button className="submit-btn" type="submit">
              {window.innerWidth > 768 ? "Search" : <MdSearch size={20} />}
            </button>
          )}
        </form>
        <h3>Requests: {requests}/60</h3>
      </div>
    </section>
  );
};

export default Search;
