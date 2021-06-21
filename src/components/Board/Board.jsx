import { useState, useEffect } from "react";
import { initializeDeck } from "../../api/api";
import { CardLayout } from "../Layout";
import { ButtonContainer, GameOver } from "..";

const Board = () => {
  const [state, setState] = useState({});
  const [gameOver, setGameOver] = useState(false);

  const drawOne = (deck) => {
    console.log(deck);
    const _deck = deck;
    if (_deck.length > 0) {
      const _card = _deck.pop();
      setState((s) => ({ ...s, deck: _deck }));
      return _card;
    } else {
      setGameOver(true);
      return false;
    }
  };

  const getDeckFromApi = async () => {
    const deck = await initializeDeck();
    const currentCard = drawOne(deck);
    setState((state) => ({
      ...state,
      currentCard,
      score: 0,
    }));
  };

  useEffect(() => {
    if (!state?.deck) {
      getDeckFromApi();
    }
  }, []);

  const parseValue = (card) => {
    let value;
    switch (card.value) {
      case "ACE":
        value = 14;
        break;
      case "KING":
        value = 13;
        break;
      case "QUEEN":
        value = 12;
        break;
      case "JACK":
        value = 11;
        break;
      case "0":
        value = 10;
        break;
      default:
        value = parseInt(card.value);
    }
    return value;
  };

  const guessLower = () => {
    const nextCard = drawOne(state.deck);
    if (!nextCard) return;
    let _value = parseValue(nextCard);
    let _prevCardValue = parseValue(state.currentCard);
    let _score = 0;

    if (_value < _prevCardValue) {
      _score += (15 - _prevCardValue) * 100;
    }

    setState((state) => ({
      ...state,
      currentCard: nextCard,
      score: state.score + _score,
    }));
  };

  const guessHigher = () => {
    const nextCard = drawOne(state.deck);
    if (!nextCard) return;
    let _value = parseValue(nextCard);
    let _prevCardValue = parseValue(state.currentCard);
    let _score = 0;

    if (_value > _prevCardValue) {
      _score += _prevCardValue * 100;
    }

    setState(() => ({
      ...state,
      currentCard: nextCard,
      score: state.score + _score,
    }));
  };

  const playAgain = () => {
    getDeckFromApi();
    setGameOver(false);
  };

  return (
    <div>
      {gameOver ? (
        <GameOver score={state.score} playAgain={playAgain} />
      ) : (
        <CardLayout>
          {state.currentCard && (
            <>
              <h1
                style={{
                  color: "#fff",
                  textAlign: "center",
                  marginBottom: "1rem",
                }}
              >
                Score: <span>{state.score || 0}</span>
                <br />
                Cards left: <span>{state.deck.length}</span>
              </h1>
              <img
                src={state.currentCard.image}
                alt={`${state.currentCard.value}_${state.currentCard.suit}`}
                width="auto"
                height="auto"
              />
              <ButtonContainer
                guessHigher={guessHigher}
                guessLower={guessLower}
              />
            </>
          )}
        </CardLayout>
      )}
    </div>
  );
};

export default Board;
