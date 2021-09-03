import React from "react";
import { item } from "../store/CardData";
import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <ul>
        {item.map((piece, index) => {
          return (
            <li key={index}>
              <img src={piece.image} alt="#?" />
              <p>{piece.description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Card;
