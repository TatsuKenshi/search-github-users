import React, { useState, useEffect, useRef, useCallback } from "react";
import mockUser from "../data/mockData/mockUser";
import mockRepos from "../data/mockData/mockRepos";
import mockFollowers from "../data/mockData/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const initialSize = () => {
  let mySize;
  if (window.innerWidth >= 1700) {
    mySize = "550";
  } else if (window.innerWidth >= 1500 && window.size <= 1699) {
    mySize = "500";
  } else if (window.innerWidth >= 1400 && window.innerWidth <= 1699) {
    mySize = "450";
  } else if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    mySize = "400";
  } else if (window.innerWidth >= 1025 && window.innerWidth <= 1199) {
    mySize = "350";
  } else if (window.innerWidth >= 850 && window.innerWidth <= 1024) {
    mySize = "550";
  } else if (window.innerWidth >= 769 && window.innerWidth <= 849) {
    mySize = "450";
  } else if (window.innerWidth >= 600 && window.innerWidth <= 768) {
    mySize = "500";
  } else if (window.innerWidth >= 500 && window.innerWidth <= 599) {
    mySize = "400";
  } else if (window.innerWidth >= 400 && window.innerWidth <= 499) {
    mySize = "350";
  } else if (window.innerWidth < 400) {
    mySize = "300";
  }
  return mySize;
};
const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  // initial states
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState({ show: false, msg: "" });
  const [chartSize, setChartSize] = useState(initialSize);
  console.log(chartSize);

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
      toggleError(true, "no such user exists");
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

  useEffect(() => {
    window.addEventListener("resize", () => {
      const size = window.innerWidth;
      console.log(size);
      if (size >= 1700) {
        setChartSize("550");
      } else if (size >= 1500 && size <= 1699) {
        setChartSize("500");
      } else if (size >= 1400 && size <= 1699) {
        setChartSize("450");
      } else if (size >= 1200 && size <= 1499) {
        setChartSize("400");
      } else if (size >= 1025 && size <= 1199) {
        setChartSize("350");
      } else if (size >= 850 && size <= 1024) {
        setChartSize("550");
      } else if (size >= 769 && size <= 849) {
        setChartSize("450");
      } else if (size >= 600 && size <= 768) {
        setChartSize("500");
      } else if (size >= 500 && size <= 599) {
        setChartSize("400");
      } else if (size >= 400 && size <= 499) {
        setChartSize("350");
      } else if (size < 400) {
        setChartSize("300");
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

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
        chartSize,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubProvider, GithubContext };
