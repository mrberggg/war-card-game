import React, { useState, useEffect } from "react";
import { Button, Container } from "@material-ui/core";
import { Clear as LostIcon, Done as WonIcon } from "@material-ui/icons";
import Deck from "../Deck/Deck";
import War from "../../utils/war";
import "./Board.css";
import Card from "../Card/Card";

export default () => {
  const [loading, setLoading] = useState(true);
  const [won, setWon] = useState(false);
  const [wonHand, setWonHand] = useState();
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

    setWonHand(result);

    if (hand1.length === 0 || hand2.length === 0) {
      setWon(true);
    }
  }

  // Set up initial game
  useEffect(() => setUpGame(), []);

  return (
    <div className="Board">
      {loading ? (
        "loading"
      ) : won ? (
        <h2>User {hand1.length !== 0 ? 1 : 2} won</h2>
      ) : (
        <>
          <Container className="actions">
            <Button variant="outlined" color="primary" onClick={play}>
              Play
            </Button>
            <Button variant="outlined" color="secondary" onClick={setUpGame}>
              Reset
            </Button>
          </Container>
          <div className="players">
            <div className="player">
              <h2>Player 1</h2>
              <Deck cards={hand1} />
            </div>
            <div className="pot">
              <div className="pot1">
                {wonHand === 1 ? (
                  <WonIcon style={{ color: "green" }} />
                ) : wonHand === -1 ? (
                  <LostIcon style={{ color: "red" }} />
                ) : (
                  <div>&nbsp;</div>
                )}

                {pot1.map((p) => (
                  <Card card={p} visible={true} key={p.code} />
                ))}
              </div>
              <div className="pot2">
                {wonHand === -1 ? (
                  <WonIcon style={{ color: "green" }} />
                ) : wonHand === 1 ? (
                  <LostIcon style={{ color: "red" }} />
                ) : (
                  <div>&nbsp;</div>
                )}

                {pot2.map((p) => (
                  <Card card={p} visible={true} key={p.code} />
                ))}
              </div>
            </div>
            <div className="player">
              <h2>Player 2</h2>
              <Deck cards={hand2} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
