import { evaluate, play, playHand } from "./war";

describe("war", () => {
  describe("evaluate", () => {
    it("should return 0 if equal to", () => {
      const card1 = {
        suit: "Spades",
        code: "SK",
        face: "King",
        value: 13,
      };
      const card2 = {
        suit: "Diamonds",
        code: "DK",
        face: "King",
        value: 13,
      };
      const result = evaluate(card1, card2);
      expect(result).toEqual(0);
    });

    it("should return 1 if greater than", () => {
      const card1 = {
        suit: "Spades",
        code: "SK",
        face: "King",
        value: 13,
      };
      const card2 = {
        suit: "Diamonds",
        code: "DJ",
        face: "Jack",
        value: 11,
      };
      const result = evaluate(card1, card2);
      expect(result).toEqual(1);
    });

    it("should return -1 if less than", () => {
      const card1 = {
        suit: "Spades",
        code: "S3",
        face: "Three",
        value: 3,
      };
      const card2 = {
        suit: "Diamonds",
        code: "DJ",
        face: "Jack",
        value: 11,
      };
      const result = evaluate(card1, card2);
      expect(result).toEqual(-1);
    });
  });

  describe("playHand", () => {
    it("should return updated decks", () => {
      const deck1 = [{ value: 4 }, { value: 5 }, { value: 3 }];
      const deck2 = [{ value: 2 }, { value: 11 }, { value: 9 }];
      const [updatedDeck1, updatedDeck2] = playHand(deck1, deck2);
      expect(updatedDeck1).toEqual([
        { value: 5 },
        { value: 3 },
        { value: 4 },
        { value: 2 },
      ]);
      expect(updatedDeck2).toEqual([{ value: 11 }, { value: 9 }]);
    });
  });
});
