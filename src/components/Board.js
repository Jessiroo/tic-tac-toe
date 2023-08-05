import classes from './Board.module.css';
import GameTile from './GameTile';

const Board = () => {

  // Vertical Divider Classes
  const topDividerClasses = `${classes.topDivider} ${classes.verticalDivider}`;
  const bottomDividerClasses = `${classes.bottomDivider} ${classes.verticalDivider}`;

  return (
    <div className={classes.board}>
      <div className={classes.boardRow}>
        <GameTile />
        <div className={topDividerClasses}/>
        <GameTile />
        <div className={topDividerClasses}/>
        <GameTile />
      </div>
      <div className={classes.horizontalDivider}/>
      <div className={classes.boardRow}>
        <GameTile />
        <div className={classes.verticalDivider}/>
        <GameTile />
        <div className={classes.verticalDivider}/>
        <GameTile />
      </div>
      <div className={classes.horizontalDivider}/>
      <div className={classes.boardRow}>
        <GameTile />
        <div className={bottomDividerClasses}/>
        <GameTile />
        <div className={bottomDividerClasses}/>
        <GameTile />
      </div>
    </div>
  );
};

export default Board;