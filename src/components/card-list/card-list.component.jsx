import React from "react";
import "./card-list.styles.css";
import { Card } from "../card/card.component";

export const CardList = (props) => (
  <div className="card-list">
    {props.friends.map((friend) => (
      <Card key={friend.id} friend={friend} />
    ))}
  </div>
);
