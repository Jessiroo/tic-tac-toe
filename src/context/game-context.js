import { createContext } from "react";


const GameContext = createContext({
  movesArray: [],
  score: [],
  turn: '',
  gameWon: false,
  updateMoves: (position, value) => {},
  updateScore: (player) => {},
  clearMoves: () => {},
  clearAll: () => {},
});

export default GameContext;