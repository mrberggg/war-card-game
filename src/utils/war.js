export const evaluate = (card1, card2) => {
  if (card1.value === card2.value) return 0;
  return card1.value > card2.value ? 1 : -1;
};

export const playHand = (deck1, deck2) => {
  let newDeck1 = [...deck1];
  let newDeck2 = [...deck2];
  const card1 = newDeck1.shift();
  const card2 = newDeck2.shift();
  const res = evaluate(card1, card2);

  // If cards are equal
  if (res === 0) {
    newDeck1 = [...newDeck1, card1];
    newDeck2 = [...newDeck2, card2];
    return [newDeck1, newDeck2];
  }
  // If card 1 is greater
  else if (res === 1) {
    newDeck1 = [...newDeck1, card1, card2];
    newDeck2 = [...newDeck2];
    return [newDeck1, newDeck2];
  }
  // If card 2 is greater
  else {
    newDeck1 = [...newDeck1];
    newDeck2 = [...newDeck2, card1, card2];
    return [newDeck1, newDeck2];
  }
};
