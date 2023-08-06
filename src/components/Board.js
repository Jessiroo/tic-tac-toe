import { useContext, useEffect } from 'react';

import classes from './Board.module.css';
import GameTile from './GameTile';
import GameContext from '../context/game-context';
import useWinChecker from '../hooks/use-win-checker';

const Board = () => {
  const { 
    movesArray, 
    updateMoves, 
    turn,
  } = useContext(GameContext);
  const { checkWin } = useWinChecker();

  useEffect(() => {
    checkWin(movesArray, turn);
  }, [movesArray, checkWin, turn]);

  // Vertical Divider Classes
  const topDividerClasses = `${classes.topDivider} ${classes.verticalDivider}`;
  const bottomDividerClasses = `${classes.bottomDivider} ${classes.verticalDivider}`;

  return (
    <div className={classes.board}>
      <div className={classes.boardRow}>
        <GameTile 
          value={movesArray[0]}
          onClick={updateMoves.bind(null, 0, turn)}
        />
        <div className={topDividerClasses}/>
        <GameTile 
          value={movesArray[1]}
          onClick={updateMoves.bind(null, 1, turn)}
        />
        <div className={topDividerClasses}/>
        <GameTile 
          value={movesArray[2]}
          onClick={updateMoves.bind(null, 2, turn)}
        />
      </div>
      <div className={classes.horizontalDivider}/>
      <div className={classes.boardRow}>
        <GameTile 
          value={movesArray[3]}
          onClick={updateMoves.bind(null, 3, turn)}
        />
        <div className={classes.verticalDivider}/>
        <GameTile 
          value={movesArray[4]}
          onClick={updateMoves.bind(null, 4, turn)}
        />
        <div className={classes.verticalDivider}/>
        <GameTile 
          value={movesArray[5]}
          onClick={updateMoves.bind(null, 5, turn)}
        />
      </div>
      <div className={classes.horizontalDivider}/>
      <div className={classes.boardRow}>
        <GameTile 
          value={movesArray[6]}
          onClick={updateMoves.bind(null, 6, turn)}
        />
        <div className={bottomDividerClasses}/>
        <GameTile 
          value={movesArray[7]}
          onClick={updateMoves.bind(null, 7, turn)}
        />
        <div className={bottomDividerClasses}/>
        <GameTile 
          value={movesArray[8]}
          onClick={updateMoves.bind(null, 8, turn)}
        />
      </div>
    </div>
  );
};

export default Board;