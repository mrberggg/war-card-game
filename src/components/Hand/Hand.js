import React from "react";
import backSvg from "svg-cards/png/2x/back-red.png";
import "./Hand.css";

export default ({ cards }) => {
  const alt = `Card deck with ${cards.length} cards`;
  return (
    <div className="Hand">
      {cards.map((c, index) => (
        <div className="card" style={{ "z-index": `-${index}` }}>
          <img src={backSvg} alt={alt} />
        </div>
      ))}
    </div>
  );
};
