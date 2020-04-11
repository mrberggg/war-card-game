export default class Hand {
  cards;

  constructor(cards) {
    this.cards = cards;
  }

  draw() {
    return this.cards.length > 0 ? this.cards.shift() : null;
  }

  add(cards) {
    if (!Array.isArray(cards)) {
      cards = [cards];
    }
    this.cards = [...this.cards, ...cards];
  }

  showHand() {
    return this.cards;
  }
}
