import React from "react";
import Card from "./Card";
import Followers from "./Followers";

const User = () => {
  return (
    <section className="section">
      <div className="section-center" style={{ display: "flex" }}>
        <Card></Card>
        <Followers></Followers>
      </div>
    </section>
  );
};

export default User;
