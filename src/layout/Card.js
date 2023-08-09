import classes from './Card.module.css'

const Card = (props) => {

  const styleClasses = `${classes.card} ${props.className}`

  return (
    <div className={styleClasses}>
      {props.children}
    </div>
  );
};

export default Card;