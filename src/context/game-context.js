import { createContext } from "react";


const GameContext = createContext({
  movesArray: [],
  score: [],
  turn: '',
  updateMoves: (position, value) => {},
  updateScore: (player) => {},
  clearMoves: () => {},
  clearAll: () => {},
});

export default GameContext;