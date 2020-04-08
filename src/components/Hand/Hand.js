import React from "react";

export default ({ cards }) => {
  return (
    <div>
      {cards.map((card) => (
        <div key={card.code}>{`${card.face} of ${card.suit}`}</div>
      ))}
    </div>
  );
};
