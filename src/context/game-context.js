import { createContext } from "react";


const GameContext = createContext({
  movesArray: [],
  score: [],
  turn: '',
  gameWon: false,
  tieCount: 0,
  updateMoves: (position, value) => {},
  updateScore: (player) => {},
  clearMoves: () => {},
  clearAll: () => {},
});

export default GameContext;