import React from "react";
import {
  Clear as LostIcon,
  Done as WonIcon,
  Remove as TieIcon,
} from "@material-ui/icons";
import Card from "../Card/Card";
import "./Hand.css";

export default ({ cards, draw, won }) => {
  return (
    <div className="Hand">
      {draw ? (
        <TieIcon style={{ color: "grey" }} aria-label="User tied" />
      ) : won ? (
        <WonIcon style={{ color: "green" }} aria-label="User won" />
      ) : (
        <LostIcon style={{ color: "red" }} aria-label="User lost" />
      )}

      {cards.map((c, index) => (
        <Card card={c} visible={index % 2 === 0} key={c.code} />
      ))}
    </div>
  );
};
