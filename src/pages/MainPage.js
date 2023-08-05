import classes from './MainPage.module.css';
import GameCard from "../components/GameCard";

const MainPage = () => {

  return (
    <div className={classes.layout}>
      <h1>Welcome to Tic Tac Toe</h1>
      <div className={classes.gameCard}>
        <GameCard />
      </div>
    </div>
  );
};

export default MainPage;