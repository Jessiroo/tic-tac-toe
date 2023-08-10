import classes from './MainPage.module.css';
import GameCard from "../components/GameCard";

const MainPage = () => {

  return (
    <div className={classes.layout}>
      <h1>Let's play Tic Tac Toe!</h1>
      <div className={classes.gameCard}>
        <GameCard />
      </div>
    </div>
  );
};

export default MainPage;