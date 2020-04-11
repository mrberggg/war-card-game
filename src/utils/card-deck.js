const createSuit = (suit) => {
  const suitPrefix = suit.slice(0, 1);
  return [
    {
      suit,
      code: `${suitPrefix}A`,
      face: "Ace",
      value: 14,
    },
    {
      suit,
      code: `${suitPrefix}2`,
      face: "Two",
      value: 2,
    },
    {
      suit,
      code: `${suitPrefix}3`,
      face: "Three",
      value: 3,
    },
    {
      suit,
      code: `${suitPrefix}4`,
      face: "Four",
      value: 4,
    },
    {
      suit,
      code: `${suitPrefix}5`,
      face: "Five",
      value: 5,
    },
    {
      suit,
      code: `${suitPrefix}6`,
      face: "Six",
      value: 6,
    },
    {
      suit,
      code: `${suitPrefix}7`,
      face: "Seven",
      value: 7,
    },
    {
      suit,
      code: `${suitPrefix}8`,
      face: "Eight",
      value: 8,
    },
    {
      suit,
      code: `${suitPrefix}9`,
      face: "Nine",
      value: 9,
    },
    {
      suit,
      code: `${suitPrefix}10`,
      face: "Ten",
      value: 10,
    },
    {
      suit,
      code: `${suitPrefix}J`,
      face: "Jack",
      value: 11,
    },
    {
      suit,
      code: `${suitPrefix}Q`,
      face: "Queen",
      value: 12,
    },
    {
      suit,
      code: `${suitPrefix}K`,
      face: "King",
      value: 13,
    },
  ];
};

export const createDeck = () => [
  ...createSuit("Clubs"),
  ...createSuit("Diamonds"),
  ...createSuit("Hearts"),
  ...createSuit("Spades"),
];

export const shuffle = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
  return deck;

  // return deck.sort(() => 0.5 - Math.random());
};

export const createdShuffledDeck = () => {
  return shuffle(createDeck());
};
