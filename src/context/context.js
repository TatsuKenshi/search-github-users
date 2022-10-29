import React, { useState, useEffect, useRef } from "react";
import mockUser from "../data/mockData/mockUser";
import mockRepos from "../data/mockData/mockRepos";
import mockFollowers from "../data/mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  // request loading
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  // check remaining requests
  const checkRequests = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "Sorry, you reached the hourly request limit.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // error function
  const toggleError = (show = false, msg = "") => {
    setIsError({ show, msg });
  };

  // fetch ref
  const fetchRef = useRef(true);

  useEffect(() => {
    if (fetchRef.current) {
      fetchRef.current = false;
      checkRequests();
    }
  }, []);

  return (
    <GithubContext.Provider
      value={{ githubUser, repos, followers, requests, isError }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
