import { createDeck } from "./card-deck";

describe("createDeck", () => {
  it("to create a full deck", () => {
    const deck = createDeck();
    expect(deck.length).toEqual(52);
    expect(deck.filter((d) => d.suit === "Clubs").length).toEqual(13);
    expect(deck.filter((d) => d.suit === "Diamonds").length).toEqual(13);
    expect(deck.filter((d) => d.suit === "Hearts").length).toEqual(13);
    expect(deck.filter((d) => d.suit === "Spades").length).toEqual(13);
  });
});
