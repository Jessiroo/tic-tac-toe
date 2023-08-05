import classes from './GameCard.module.css';
import Board from './Board';
import ScoreCard from './ScoreCard';

const GameCard = () => {
  return (
    <div className={classes.gameCard}>
      <Board />
      <ScoreCard />
    </div>
  );
};

export default GameCard;