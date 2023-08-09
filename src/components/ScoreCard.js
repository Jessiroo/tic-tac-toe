import { useContext, useEffect } from 'react';

import classes from './ScoreCard.module.css';
import GameContext from '../context/game-context';
import Button from '../layout/Button';
import Card from '../layout/Card';

const ScoreCard = () => {
  const {
    movesArray,
    score,
    turn,
    tieCount,
    gameWon,
    updateTie,
    clearMoves,
    clearAll,
  } = useContext(GameContext);

  // Tie Counter
  useEffect(() => {
    if (!movesArray.includes(null) && !gameWon) {
      updateTie();
    };
  }, [updateTie, gameWon, movesArray])

  // Game State Message
  let gameStateMessage = `It's player ${turn}'s turn!`;

  if (gameWon && turn === 'X') {
    gameStateMessage = "Player O wins!"
  } else if (gameWon && turn === 'O') {
    gameStateMessage = "Player X wins!"
  } else if (!movesArray.includes(null) && !gameWon) {
    gameStateMessage = tieCount > 3 ? "Seriously, again?" : "Tie...";
  };

  return (
    <Card className={classes.scoreCard}>
      <div className={classes.button}>
        <Button onClick={clearMoves}>Clear <br/> Board</Button>
      </div>
      <div className={classes.info}>
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