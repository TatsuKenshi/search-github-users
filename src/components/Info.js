import React from "react";
import { GithubContext } from "../context/context";

const Info = () => {
  const info = React.useContext(GithubContext)
  return <div>Info : {info}</div>;
};

export default Info;
