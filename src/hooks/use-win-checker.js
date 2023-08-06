import { useCallback, useContext } from "react";

import GameContext from "../context/game-context";

const useWinChecker = () => {
  const { updateScore } = useContext(GameContext);

  const checkWin = useCallback((currentMoves, turn) => {
    if (
      (currentMoves[0] !== null 
        && currentMoves[0] === currentMoves[1] 
        && currentMoves[0] === currentMoves[2]) ||
      (currentMoves[0] !== null 
        && currentMoves[0] === currentMoves[3] 
        && currentMoves[0] === currentMoves[6]) ||
      (currentMoves[0] !== null 
        && currentMoves[0] === currentMoves[4] 
        && currentMoves[0] === currentMoves[8]) ||
      (currentMoves[1] !== null 
        && currentMoves[1] === currentMoves[4] 
        && currentMoves[1] === currentMoves[7]) ||
      (currentMoves[2] !== null 
        && currentMoves[2] === currentMoves[5] 
        && currentMoves[2] === currentMoves[8]) ||
      (currentMoves[2] !== null 
        && currentMoves[2] === currentMoves[4] 
        && currentMoves[2] === currentMoves[6]) ||
      (currentMoves[3] !== null 
        && currentMoves[3] === currentMoves[4] 
        && currentMoves[3] === currentMoves[5]) ||
      (currentMoves[6] !== null 
        && currentMoves[6] === currentMoves[7] 
        && currentMoves[6] === currentMoves[8])
    ) {
      if (turn === 'X') {
        console.log('player 2 wins!');
        updateScore(1);
        return true;
      } else {
        console.log('player 1 wins!');
        updateScore(0);
        return true;
      };
    };
    return false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    checkWin,
  };
};

export default useWinChecker;

