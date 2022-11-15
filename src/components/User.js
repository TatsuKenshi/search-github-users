import React from "react";
import Card from "./Card";
import Followers from "./Followers";
import "../styles/components/User.scss";

const User = () => {
  return (
    <section className="user-section">
      <div className="user-section-center">
        <Card></Card>
        <Followers></Followers>
      </div>
    </section>
  );
};

export default User;
