import React from "react";
import { render, getByLabelText } from "@testing-library/react";
import Hand from "./Hand";

describe("Hand", () => {
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

  it("should display cards", () => {
    const { getByAltText } = render(<Hand won={true} cards={cards} />);
    const aceOfSpades = getByAltText("Ace of Spades");
    const kingOfHearts = getByAltText("Hidden card");
    expect(aceOfSpades).toBeInTheDocument();
    expect(kingOfHearts).toBeInTheDocument();
  });

  it("should show when user wins", () => {
    const { getByLabelText } = render(<Hand won={true} cards={cards} />);
    const userWon = getByLabelText("User won");
    expect(userWon).toBeInTheDocument();
  });

  it("should show when user loses", () => {
    const { getByLabelText } = render(<Hand won={false} cards={cards} />);
    const userLost = getByLabelText("User lost");
    expect(userLost).toBeInTheDocument();
  });

  it("should show when user loses", () => {
    const { getByLabelText } = render(<Hand draw={true} cards={cards} />);
    const userTied = getByLabelText("User tied");
    expect(userTied).toBeInTheDocument();
  });
});
