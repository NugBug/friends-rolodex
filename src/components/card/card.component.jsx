import React from "react";
import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="friends"
      src={`https://robohash.org/${props.friend.id}?set=set3`}
    />
    <h2> {props.friend.name} </h2>
    <p> {props.friend.email} </p>
  </div>
);
