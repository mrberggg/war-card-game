import React from "react";
import backSvg from "svg-cards/png/2x/back-red.png";
import "./Card.css";

export function getFileSuit({ suit }) {
  switch (suit) {
    case "Clubs":
      return "club";
    case "Diamonds":
      return "diamond";
    case "Hearts":
      return "heart";
    case "Spades":
      return "spade";
    default:
      throw new Error("Suit not found");
  }
}

export function getFileFace({ face, value }) {
  const mappedNames = {
    Ace: "1",
    Jack: "jack",
    Queen: "queen",
    King: "king",
  };
  return mappedNames[face] ?? `${value}`;
}

export function getFileNameFromCard(card) {
  const suit = getFileSuit(card);
  const face = getFileFace(card);
  return `${suit}_${face}.png`;
}

function importImage(card) {
  const fileName = getFileNameFromCard(card);
  return require(`svg-cards/png/2x/${fileName}`);
}

export default ({ card, visible = true }) => {
  const src = !visible ? backSvg : importImage(card);
  const alt = !visible ? "Hidden card" : `${card.face} of ${card.suit}`;
  return (
    <div className="Card">
      <img src={src} alt={alt} />
    </div>
  );
};
