import React from "react";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../context/context";

const Search = () => {
  const [user, setUser] = React.useState("");
  const { requests, isError } = React.useContext(GithubContext);
  // get things from global context

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user) {
    }
    // more logic coming soon
    // optional setUser("")
  };

  return (
    <section className="section">
      <div className="section-center">
        {isError.show && (
          <div className="error-wrapper">
            <p>{isError.msg}</p>
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              placeholder="enter github user"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
            {requests > 0 && <button type="submit">Search</button>}
          </div>
        </form>
        <h3>Requests: {requests} / 60</h3>
      </div>
    </section>
  );
};

export default Search;
