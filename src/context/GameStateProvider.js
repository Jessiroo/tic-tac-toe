import { useCallback, useReducer } from "react";

import GameContext from "./game-context";

// DEFAULT STATE
const defaultGameState = {
  movesArray: [null, null, null, null, null, null, null, null, null],
  score: [0, 0],
  turn: 'X',
  gameWon: false,
};

// GAME STATE REDUCER
const gameStateReducer = (state, action) => {
  // Update Moves
  if (action.type === 'UPDATEMOVES') {
    if (state.movesArray[action.position] !== null || state.gameWon) {
      return {
        movesArray: state.movesArray,
        score: state.score,
        turn: state.turn,
        gameWon: state.gameWon,
      };
    }
    let newMoves = [...state.movesArray];
    newMoves[action.position] = action.value;
    let newTurn = '';
    if (state.turn === 'X') {
      newTurn = 'O';
    } else {
      newTurn = 'X';
    };
    return {
      movesArray: newMoves,
      score: state.score,
      turn: newTurn,
      gameWon: state.gameWon,
    };
  };

  // Update Score
  if (action.type === 'UPDATESCORE') {
    let newScore = [...state.score];
    newScore[action.player] += 1;
    return {
      movesArray: state.movesArray,
      score: newScore,
      turn: state.turn,
      gameWon: state.gameWon,
    };
  };

  // Update Win State
  if (action.type === 'UPDATEWIN') {
    return {
      movesArray: state.movesArray,
      score: state.score,
      turn: state.turn,
      gameWon: action.winState,
    }
  }

  // Clear Moves
  if (action.type === 'CLEARMOVES') {
    const turnRandomizer = Math.floor(Math.random() * 10 + 1);
    let newTurn = '';
    if (turnRandomizer <= 5) {
      newTurn = 'X';
    } else if (turnRandomizer > 5) {
      newTurn = 'O';
    };

    return {
      movesArray: defaultGameState.movesArray,
      score: state.score,
      turn: newTurn,
      gameWon: false,
    };
  };

  // Clear All
  if (action.type === 'CLEARALL') {
    return defaultGameState;
  };

  // Default
  return defaultGameState;
};

// GAMESTATE PROVIDER
const GameStateProvider = (props) => {
  const [gameState, dispatchGameAction] = useReducer(
    gameStateReducer,
    defaultGameState,
  );

  // Dispatch Handlers
  const updateMovesHandler = (position, value) => {
    dispatchGameAction({ 
      type: 'UPDATEMOVES', 
      position: position, 
      value: value 
    });
  };

  const updateScoreHandler = useCallback((player) => {
    dispatchGameAction({ 
      type: 'UPDATESCORE', 
      player: player 
    });
  }, []);

  const updateGameWonHandler = (winState) => {
    dispatchGameAction({ 
      type: 'UPDATEWIN',
      winState: winState,
     })
  };

  const clearMovesHandler = () => {
    dispatchGameAction({ type: 'CLEARMOVES' });
  };

  const clearAllHandler = () => {
    dispatchGameAction({ type: 'CLEARALL' });
  };

  // Exported Context
  const gameContext = {
    movesArray: gameState.movesArray,
    score: gameState.score,
    turn: gameState.turn,
    gameWon: gameState.gameWon,
    updateMoves: updateMovesHandler,
    updateScore: updateScoreHandler,
    updateGameWon: updateGameWonHandler,
    clearMoves: clearMovesHandler,
    clearAll: clearAllHandler,
  };

  // Exported Provider
  return (
    <GameContext.Provider value={gameContext}>
      {props.children}
    </GameContext.Provider>
  );
};

export default GameStateProvider;