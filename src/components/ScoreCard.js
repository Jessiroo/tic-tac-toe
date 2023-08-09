import { useContext } from 'react';

import classes from './ScoreCard.module.css';
import GameContext from '../context/game-context';
import Button from '../layout/Button';
import Card from '../layout/Card';

const ScoreCard = () => {
  const {
    movesArray,
    score,
    turn,
    gameWon,
    clearMoves,
    clearAll,
  } = useContext(GameContext);

  // Game State Message
  let gameStateMessage = `It's player ${turn}'s turn!`;

  if (gameWon && turn === 'X') {
    gameStateMessage = "Player O wins!"
  } else if (gameWon && turn === 'O') {
    gameStateMessage = "Player X wins!"
  } else if (!movesArray.includes(null)) {
    gameStateMessage = "Tie..."
  }

  return (
    <Card className={classes.scoreCard}>
      <div className={classes.button}>
        <Button onClick={clearMoves}>Clear <br/> Board</Button>
      </div>
      <div>
        <h2>{gameStateMessage}</h2>
        <div className={classes.scores}>
          <p>X: {score[0]}</p>
          <p>O: {score[1]}</p>
        </div>
      </div>
      <div className={classes.button}>
        <Button onClick={clearAll}>Clear <br/> All</Button>
      </div>
    </Card>
  );
};

export default ScoreCard;