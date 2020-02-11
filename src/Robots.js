import React from "react";
import "./Robots.css";

const Robots = ({ id, name, email }) => {
  return (
    <div className="bg-light-pink dib ma3 pa3 br3 grow tc shadow-3 robo">
      <img src={`https://robohash.org/${id}`} alt="roboImage" />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
};

export default Robots;
