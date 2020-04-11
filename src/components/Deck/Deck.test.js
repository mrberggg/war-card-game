import React from "react";
import { render } from "@testing-library/react";
import Deck from "./Deck";

describe("Deck", () => {
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
    const { getByAltText } = render(<Deck cards={cards} />);
    const aceOfSpades = getByAltText("Playing card");
    expect(aceOfSpades).toBeInTheDocument();
  });
});
