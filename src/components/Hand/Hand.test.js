import React from "react";
import { render } from "@testing-library/react";
import Hand from "./Hand";

test("displays card", () => {
  const cards = [
    {
      suit: "Spades",
      code: "SA",
      face: "Ace",
      value: 14,
    },
    {
      suit: "Hearts",
      code: "SK",
      face: "King",
      value: 13,
    },
  ];
  const { getByText } = render(<Hand cards={cards} />);
  const aceOfSpades = getByText("Ace of Spades");
  expect(aceOfSpades).toBeInTheDocument();
  const kingOfHearts = getByText("King of Hearts");
  expect(kingOfHearts).toBeInTheDocument();
});
