import { useCallback, useContext } from "react";

import GameContext from "../context/game-context";

const useWinChecker = () => {
  const { updateScore, updateGameWon } = useContext(GameContext);

  const checkWin = useCallback((currentMoves, turn) => {
  const winScenarios = [
    [currentMoves[0], currentMoves[1], currentMoves[2]],
    [currentMoves[0], currentMoves[3], currentMoves[6]],
    [currentMoves[0], currentMoves[4], currentMoves[8]],
    [currentMoves[1], currentMoves[4], currentMoves[7]],
    [currentMoves[2], currentMoves[4], currentMoves[6]],
    [currentMoves[2], currentMoves[5], currentMoves[8]],
    [currentMoves[3], currentMoves[4], currentMoves[5]],
    [currentMoves[6], currentMoves[7], currentMoves[8]],
  ];

  const checkWinParameters = (array) => {
    if (array.includes(null)) {
      return false;
    };
    return array.every(val => val === array[0]);
  };

  for (let index = 0; index < winScenarios.length; index++) {
    const winParametersMet = checkWinParameters(winScenarios[index]);

    if (winParametersMet) {
      if (turn === 'X') {
        console.log('player 2 wins!')
        updateScore(1);
      } else {
        console.log('player 1 wins!')
        updateScore(0);
      };
      updateGameWon(true);
      return;
    };
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    checkWin,
  };
};

export default useWinChecker;