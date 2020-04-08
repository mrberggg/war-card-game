import React from "react";

export default ({ card }) => {
  const formattedText = `${card.face} of ${card.suit}`;
  return <div>{formattedText}</div>;
};
