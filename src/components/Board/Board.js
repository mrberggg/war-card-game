import React, { useState, useEffect } from "react";
import Hand from "../Hand/Hand";
import War from "../../utils/war";
import "./Board.css";

export default () => {
  const [loading, setLoading] = useState(true);
  const [won, setWon] = useState(false);
  const [wonHand, setWonHand] = useState();
  const [isAuto, setIsAuto] = useState(false);
  const [hand1, setHand1] = useState([]);
  const [hand2, setHand2] = useState([]);
  const [pot1, setPot1] = useState([]);
  const [pot2, setPot2] = useState([]);
  const [war, setWar] = useState();

  function setUpGame() {
    setLoading(true);
    const newWar = new War();
    setWar(newWar);
    const { hand1, hand2 } = newWar.getHands();
    setHand1(hand1);
    setHand2(hand2);
    setPot1([]);
    setPot2([]);
    setWon(false);
    setWonHand(null);
    setIsAuto(false);
    setLoading(false);
  }

  function play() {
    const { result, pots, nextHand } = war.playHand();
    const { pot1, pot2 } = pots;
    const { hand1, hand2 } = nextHand;

    setPot1(pot1);
    setPot2(pot2);

    setHand1(hand1);
    setHand2(hand2);

    if (result !== 0) {
      const { hand1, hand2 } = war.getHands();
      setHand1(hand1);
      setHand2(hand2);
    }
    if (hand1.length === 0 || hand2.length === 0) {
      setWon(true);
      setIsAuto(false);
    }
  }

  // Set up initial game
  useEffect(() => setUpGame(), []);

  if (isAuto) {
    setTimeout(() => play(), 500);
  }
  return (
    <div className="Board">
      {loading ? (
        "loading"
      ) : won ? (
        <h2>User {hand1.length !== 0 ? 1 : 2} won</h2>
      ) : (
        <>
          <div className="actions">
            <button onClick={play}>Play</button>
            <button onClick={setUpGame}>Reset</button>
            <button onClick={() => setIsAuto(true)}>Auto</button>
          </div>
          <div className="players">
            <div className="player">
              <h2>Player 1</h2>
              <Hand cards={hand1} />
            </div>
            <div className="pot">
              <div className="pot1">
                {pot1.length > 0 ? (
                  <h2>Pot 1{wonHand === 1 ? " +" : ""}</h2>
                ) : (
                  ""
                )}
                {pot1.map((p) => (
                  <div key={`pot1-${p.code}`}>{`${p.face} of ${p.suit}`}</div>
                ))}
              </div>
              <div className="pot2">
                {pot2.length > 0 ? (
                  <h2>Pot 2{wonHand === -1 ? " +" : ""}</h2>
                ) : (
                  ""
                )}
                {pot2.map((p) => (
                  <div key={`pot2-${p.code}`}>{`${p.face} of ${p.suit}`}</div>
                ))}
              </div>
            </div>
            <div className="player">
              <h2>Player 2</h2>
              <Hand cards={hand2} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
