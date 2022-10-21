import React, {useState, useEffect, useRef, createContext} from 'react'
import mockUser from "../data/mockData/mockUser"
import mockRepos from "../data/mockData/mockRepos"
import mockFollowers from "../data/mockData/mockFollowers"
import axios from 'axios'

const rootUrl = "https://api.github.com"

const GithubContext = React.createContext();

const GithubProvider = ({children}) => {

  return <GithubContext.Provider value={"hello"}>{children}</GithubContext.Provider>
}

export {GithubProvider, GithubContext}