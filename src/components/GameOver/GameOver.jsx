import { GameOverContainer, H1, Button } from "./style";

const GameOver = ({ score, playAgain }) => {
  return (
    <GameOverContainer>
      <H1>
        Game Over your score is: <em>{score}</em>
      </H1>
      <Button onClick={playAgain}>Play Again</Button>
    </GameOverContainer>
  );
};

export default GameOver;
