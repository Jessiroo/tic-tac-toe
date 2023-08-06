import classes from './GameTile.module.css';

const GameTile = (props) => {
  return (
    <div 
      onClick={props.onClick}
      className={classes.tile}
    >
      {props.value}
    </div>
  );
};

export default GameTile;