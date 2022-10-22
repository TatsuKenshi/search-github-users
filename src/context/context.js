import React, {useState, useEffect, useRef} from 'react'
import mockUser from "../data/mockData/mockUser"
import mockRepos from "../data/mockData/mockRepos"
import mockFollowers from "../data/mockData/mockFollowers"
import axios from 'axios'

const rootUrl = "https://api.github.com"

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos)
  const [followers, setFollowers] = useState(mockFollowers)

  const fetchRef = useRef(true)

  useEffect(()=>{},[])

  return <GithubContext.Provider value={{githubUser, repos, followers}}>{children}</GithubContext.Provider>
}

export {GithubProvider, GithubContext}