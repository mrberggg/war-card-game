import War, { evaluate } from "./war";
import * as cardDeck from "./card-deck";
import Hand from "./card-hand";

describe("war", () => {
  beforeEach(() => {
    jest.spyOn(cardDeck, "shuffle").mockImplementation((val) => val);
  });

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

  describe("War", () => {
    it("should initialize correctly", () => {
      const war = new War();
      expect(war.hand1.showHand().length).toEqual(26);
      expect(war.hand2.showHand().length).toEqual(26);
    });

    describe("getHands", () => {
      it("should return hands", () => {
        const war = new War();
        war.hand1 = new Hand([{ asdf1: "test1" }]);
        war.hand2 = new Hand([{ asdf2: "test2" }]);
        const hands = war.getHands();
        expect(hands.hand1).toEqual([{ asdf1: "test1" }]);
        expect(hands.hand2).toEqual([{ asdf2: "test2" }]);
      });
    });

    describe("getPots", () => {
      it("should return pots", () => {
        const war = new War();
        war.pot1 = { asdf1: "test1" };
        war.pot2 = { asdf2: "test2" };
        const { pot1, pot2 } = war.getPots();
        expect(pot1).toEqual({ asdf1: "test1" });
        expect(pot2).toEqual({ asdf2: "test2" });
      });
    });

    describe("getWinnersPot", () => {
      it("should return shuffled pot", () => {
        const war = new War();
        war.pot1 = [{ asdf: "asdf1" }];
        war.pot2 = [{ asdf: "asdf2" }];
        const pot = war.getWinnersPot();
        expect(cardDeck.shuffle).toHaveBeenCalled();
        expect(pot.length).toEqual(2);
      });
    });

    describe("setHands", () => {
      it("should do nothing if result is 0", () => {
        const war = new War();
        war.hand1 = new Hand([{ asdf: "test1" }]);
        war.hand2 = new Hand([{ asdf: "test2" }]);
        war.setHands(0);
        const { hand1, hand2 } = war.getHands();
        expect(hand1).toEqual([{ asdf: "test1" }]);
        expect(hand2).toEqual([{ asdf: "test2" }]);
      });

      it("should add pot to hand 1 if result is 1", () => {
        const war = new War();
        war.hand1 = new Hand([{ asdf: "test1" }]);
        war.hand2 = new Hand([{ asdf: "test2" }]);
        war.pot1 = [{ asdf: "test3" }];
        war.pot2 = [{ asdf: "test4" }];
        war.setHands(1);
        const { hand1, hand2 } = war.getHands();
        expect(hand1).toEqual([
          { asdf: "test1" },
          { asdf: "test3" },
          { asdf: "test4" },
        ]);
        expect(hand2).toEqual([{ asdf: "test2" }]);
      });

      it("should add pot to hand 2 if result is 1", () => {
        const war = new War();
        war.hand1 = new Hand([{ asdf: "test1" }]);
        war.hand2 = new Hand([{ asdf: "test2" }]);
        war.pot1 = [{ asdf: "test3" }];
        war.pot2 = [{ asdf: "test4" }];
        war.setHands(-1);
        const { hand1, hand2 } = war.getHands();
        expect(hand1).toEqual([{ asdf: "test1" }]);
        expect(hand2).toEqual([
          { asdf: "test2" },
          { asdf: "test3" },
          { asdf: "test4" },
        ]);
      });
    });

    describe("resetPots", () => {
      it("should not reset if result is 0", () => {
        const war = new War();
        war.pot1 = [{}, {}];
        war.pot2 = [{}, {}];
        war.resetPots(0);
        expect(war.pot1.length).toEqual(2);
        expect(war.pot2.length).toEqual(2);
      });

      it("should reset if result is 1", () => {
        const war = new War();
        war.pot1 = [{}, {}];
        war.pot2 = [{}, {}];
        war.resetPots(1);
        expect(war.pot1.length).toEqual(0);
        expect(war.pot2.length).toEqual(0);
      });

      it("should reset if result is -1", () => {
        const war = new War();
        war.pot1 = [{}, {}];
        war.pot2 = [{}, {}];
        war.resetPots(1);
        expect(war.pot1.length).toEqual(0);
        expect(war.pot2.length).toEqual(0);
      });
    });

    describe("playHand", () => {
      it("should handle player 1 win correctly", () => {
        const war = new War();
        war.hand1 = new Hand([{ value: 10 }]);
        war.hand2 = new Hand([{ value: 2 }]);
        const { result, pots, nextHand } = war.playHand();
        expect(result).toEqual(1);
        expect(pots).toEqual({
          pot1: [{ value: 10 }],
          pot2: [{ value: 2 }],
        });
        expect(nextHand).toEqual({
          hand1: [{ value: 10 }, { value: 2 }],
          hand2: [],
        });
      });

      it("should handle player 2 win correctly", () => {
        const war = new War();
        war.hand1 = new Hand([{ value: 2 }]);
        war.hand2 = new Hand([{ value: 10 }]);
        const { result, pots, nextHand } = war.playHand();
        expect(result).toEqual(-1);
        expect(pots).toEqual({
          pot1: [{ value: 2 }],
          pot2: [{ value: 10 }],
        });
        expect(nextHand).toEqual({
          hand1: [],
          hand2: [{ value: 2 }, { value: 10 }],
        });
      });

      it("should handle draw correctly", () => {
        const war = new War();
        war.hand1 = new Hand([{ value: 2, code: "H2" }, { value: 3 }]);
        war.hand2 = new Hand([{ value: 2, code: "D2" }, { value: 4 }]);
        const { result, pots, nextHand } = war.playHand();
        expect(result).toEqual(0);
        expect(pots).toEqual({
          pot1: [{ value: 2, code: "H2" }],
          pot2: [{ value: 2, code: "D2" }],
        });
        expect(nextHand).toEqual({
          hand1: [{ value: 3 }],
          hand2: [{ value: 4 }],
        });
        const potsAfterPlay = war.getPots();
        expect(potsAfterPlay).toEqual({
          pot1: [{ value: 2, code: "H2" }],
          pot2: [{ value: 2, code: "D2" }],
        });
      });

      it("should handle war correctly", () => {
        const war = new War();
        war.hand1 = new Hand([{ value: 2, code: "H2" }, { value: 3 }]);
        war.hand2 = new Hand([{ value: 2, code: "D2" }, { value: 4 }]);
        war.playHand();
        const { result, pots, nextHand } = war.playHand();
        expect(result).toEqual(-1);
        expect(pots).toEqual({
          pot1: [{ value: 2, code: "H2" }, { value: 3 }],
          pot2: [{ value: 2, code: "D2" }, { value: 4 }],
        });
        expect(nextHand).toEqual({
          hand1: [],
          hand2: [
            { value: 2, code: "H2" },
            { value: 3 },
            { value: 2, code: "D2" },
            { value: 4 },
          ],
        });
      });
    });
  });
});
