import React, { useState, useEffect, useRef, useCallback } from "react";
import mockUser from "../data/mockData/mockUser";
import mockRepos from "../data/mockData/mockRepos";
import mockFollowers from "../data/mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // initial states
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: "" });

  // search users on Github
  const searchGithubUser = async (user) => {
    // set the error to false and loading to true
    // request the user

    // if the user exists, destructure login and followers_url
    // else, console log the error

    // construct request urls with login (for repos) and followers_url(for followers)

    // use await Promse.allSettled to send both requests
    // put requests in an array
    // destructure repos and followers from the results prop
    // destructure them as an array, not object
    // create the status variable with the value "fulfilled"
    // check if repos.status/followers.status equal status
    // if yes, assign repos.value.data to repos
    // if yes, assign followers.value.data to repos
    // catch any eventual errors

    // run checkRequests to check on requests status
    // set loading to false

    toggleError();
    setIsLoading(true);

    // request user
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );

    if (response) {
      setGithubUser(response.data);

      const { login, followers_url } = response.data;

      // request user's repos and followers
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ])
        .then((results) => {
          const [repos, followers] = results;
          const status = "fulfilled";
          if (repos.status === status) {
            setRepos(repos.value.data);
          }

          if (followers.status === status) {
            setFollowers(followers.value.data);
          }
        })
        .catch((err) => console.log(err));
    } else {
      toggleError(true, "there is no user with that username");
    }

    // check requests and turn off loading
    checkRequests();
    setIsLoading(false);
  };

  // check remaining requests
  const checkRequests = useCallback(() => {
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
  }, []);

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
  }, [checkRequests]);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        isError,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
