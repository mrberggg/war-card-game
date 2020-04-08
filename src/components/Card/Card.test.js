import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

test("displays card", () => {
  const card = {
    suit: "Spades",
    code: "SA",
    face: "Ace",
    value: 14,
  };
  const { getByText } = render(<Card card={card} />);
  const cardText = getByText("Ace of Spades");
  expect(cardText).toBeInTheDocument();
});
