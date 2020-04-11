import Hand from "./card-hand";
import { createdShuffledDeck, shuffle } from "./card-deck";

export const evaluate = (card1, card2) => {
  if (card1.value === card2.value) return 0;
  return card1.value > card2.value ? 1 : -1;
};

export default class War {
  hand1;
  hand2;
  pot1 = [];
  pot2 = [];

  constructor() {
    const deck = createdShuffledDeck();
    this.hand1 = new Hand(deck.slice(0, 26));
    this.hand2 = new Hand(deck.slice(26));
  }

  getHands() {
    return {
      hand1: this.hand1.showHand(),
      hand2: this.hand2.showHand(),
    };
  }

  getPots() {
    return {
      pot1: this.pot1,
      pot2: this.pot2,
    };
  }

  getWinnersPot() {
    const { pot1, pot2 } = this.getPots();
    return shuffle([...pot1, ...pot2]);
  }

  setHands(result) {
    const winnersPot = this.getWinnersPot();
    if (result === 1) {
      this.hand1.add([...winnersPot]);
    } else if (result === -1) {
      this.hand2.add([...winnersPot]);
    }
  }

  resetPots(result) {
    if (result === 0) return;
    this.pot1 = [];
    this.pot2 = [];
  }

  playHand() {
    const card1 = this.hand1.draw();
    const card2 = this.hand2.draw();
    this.pot1.push(card1);
    this.pot2.push(card2);

    // Store pots for display
    const pots = this.getPots();

    // If card1 is empty, player 2 wins
    // If card2 is empty, player 1 wins
    // Otherwise play hand
    const result =
      card1 === null ? -1 : card2 === null ? 1 : evaluate(card1, card2);

    // Set results
    this.setHands(result);

    // Reset pots
    this.resetPots(result);

    // If cards are equal
    return {
      result,
      pots,
      nextHand: this.getHands(),
    };
  }
}
