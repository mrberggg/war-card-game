import React from "react";
import { render, getByAltText } from "@testing-library/react";
import Card, { getFileSuit, getFileFace, getFileNameFromCard } from "./Card";

describe("getFileSuit", () => {
  it("should return suit for clubs", () => {
    const suit = getFileSuit({ suit: "Clubs" });
    expect(suit).toEqual("club");
  });

  it("should return suit for diamonds", () => {
    const suit = getFileSuit({ suit: "Diamonds" });
    expect(suit).toEqual("diamond");
  });

  it("should return suit for hearts", () => {
    const suit = getFileSuit({ suit: "Hearts" });
    expect(suit).toEqual("heart");
  });

  it("should return suit for spades", () => {
    const suit = getFileSuit({ suit: "Spades" });
    expect(suit).toEqual("spade");
  });
});

describe("getFileFace", () => {
  it("should work with ace", () => {
    const card = {
      face: "Ace",
      value: 14,
    };
    const face = getFileFace(card);
    expect(face).toEqual("1");
  });

  it("should work with two", () => {
    const card = {
      face: "Two",
      value: 2,
    };
    const face = getFileFace(card);
    expect(face).toEqual("2");
  });

  it("should work with three", () => {
    const card = {
      face: "Three",
      value: 3,
    };
    const face = getFileFace(card);
    expect(face).toEqual("3");
  });

  it("should work with four", () => {
    const card = {
      face: "Four",
      value: 4,
    };
    const face = getFileFace(card);
    expect(face).toEqual("4");
  });

  it("should work with five", () => {
    const card = {
      face: "Five",
      value: 5,
    };
    const face = getFileFace(card);
    expect(face).toEqual("5");
  });

  it("should work with six", () => {
    const card = {
      face: "Six",
      value: 6,
    };
    const face = getFileFace(card);
    expect(face).toEqual("6");
  });

  it("should work with seven", () => {
    const card = {
      face: "Seven",
      value: 7,
    };
    const face = getFileFace(card);
    expect(face).toEqual("7");
  });

  it("should work with eight", () => {
    const card = {
      face: "Eight",
      value: 8,
    };
    const face = getFileFace(card);
    expect(face).toEqual("8");
  });

  it("should work with nine", () => {
    const card = {
      face: "Nine",
      value: 9,
    };
    const face = getFileFace(card);
    expect(face).toEqual("9");
  });

  it("should work with ten", () => {
    const card = {
      face: "Ten",
      value: 10,
    };
    const face = getFileFace(card);
    expect(face).toEqual("10");
  });

  it("should work with jack", () => {
    const card = {
      face: "Jack",
      value: 11,
    };
    const face = getFileFace(card);
    expect(face).toEqual("jack");
  });

  it("should work with queen", () => {
    const card = {
      face: "Queen",
      value: 12,
    };
    const face = getFileFace(card);
    expect(face).toEqual("queen");
  });

  it("should work with king", () => {
    const card = {
      face: "King",
      value: 13,
    };
    const face = getFileFace(card);
    expect(face).toEqual("king");
  });
});

describe("getFileNameFromCard", () => {
  it("should get correctly formatted file name", () => {
    const card = {
      face: "Jack",
      value: "11",
      suit: "Hearts",
    };
    const fileName = getFileNameFromCard(card);
    expect(fileName).toEqual("heart_jack.png");
  });
});

describe("Card", () => {
  test("displays card", () => {
    const card = {
      suit: "Spades",
      code: "SA",
      face: "Ace",
      value: 14,
    };
    const { getByAltText } = render(<Card card={card} />);
    const cardText = getByAltText("Ace of Spades");
    expect(cardText).toBeInTheDocument();
  });
});
