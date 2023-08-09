import classes from './GameCard.module.css';
import Board from './Board';
import ScoreCard from './ScoreCard';
import Card from '../layout/Card';

const GameCard = () => {
  return (
    <Card className={classes.gameCard}>
      <Board />
      <ScoreCard />
    </Card>
  );
};

export default GameCard;