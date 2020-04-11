import React from "react";
import backSvg from "svg-cards/png/2x/back-red.png";
import "./Deck.css";

export default ({ cards }) => {
  return (
    <div className="Deck">
      {cards.map((c, index) => (
        <div className="card" style={{ zIndex: `-${index}` }} key={index}>
          <img src={backSvg} alt="Playing card" />
        </div>
      ))}
    </div>
  );
};
