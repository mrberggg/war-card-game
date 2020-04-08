const createSuit = (suit) => {
  return [
    {
      suit,
      code: "SA",
      face: "Ace",
      value: 14,
    },
    {
      suit,
      code: "S2",
      face: "Two",
      value: 2,
    },
    {
      suit,
      code: "S3",
      face: "Three",
      value: 3,
    },
    {
      suit,
      code: "S4",
      face: "Four",
      value: 4,
    },
    {
      suit,
      code: "S5",
      face: "Five",
      value: 5,
    },
    {
      suit,
      code: "S6",
      face: "Six",
      value: 6,
    },
    {
      suit,
      code: "S7",
      face: "Seven",
      value: 7,
    },
    {
      suit,
      code: "S8",
      face: "Eight",
      value: 8,
    },
    {
      suit,
      code: "S9",
      face: "Nine",
      value: 9,
    },
    {
      suit,
      code: "S10",
      face: "Ten",
      value: 10,
    },
    {
      suit,
      code: "SJ",
      face: "Jack",
      value: 11,
    },
    {
      suit,
      code: "SQ",
      face: "Queen",
      value: 12,
    },
    {
      suit,
      code: "SK",
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
